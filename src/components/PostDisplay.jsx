import React from "react";
import DOMPurify from "dompurify";

const PostDisplay = ({
    records,
    deletePost,
    setSelectedPost,
}) => {

    return (
        <div
            data-testid="posts-container"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
            role="region"
            aria-live="polite"
            aria-label="Blog posts feed"
        >
            {records.map((item) => (
                <article
                    key={item.id}
                    className="blog-card flex flex-col"
                    aria-labelledby={`title-${item.id}`}
                >
                    <div className="blog-card-accent" />

                    <div className="p-7 grow flex flex-col">
                        <time className="text-xs font-black tracking-[0.2em] text-gray-700 uppercase">
                            {item.date}
                        </time>

                        <h3
                            id={`title-${item.id}`}
                            className="text-3xl font-black mt-4 text-gray-900 leading-tight"
                        >
                            {item.title}
                        </h3>

                        <div
                            className="prose-preview text-gray-700 mt-5 overflow-hidden max-h-40 leading-7"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    item.description
                                ),
                            }}
                        />
                    </div>

                    <div className="p-5 border-t-[3px] border-black flex justify-between gap-3 bg-white">
                        <button
                            className="expand-btn"
                            onClick={() => setSelectedPost(item)}
                            aria-label={`Expand post: ${item.title}`}
                        >
                            Read Article
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => deletePost(item.id)}
                            aria-label={`Delete post: ${item.title}`}
                        >
                            Delete
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default PostDisplay;
