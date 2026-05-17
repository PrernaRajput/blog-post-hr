import React from "react";

const PostDisplay = ({ records, setRecords }) => {
    return (
        // aria-live alerts screen readers when items are added or removed from this container
        <div 
            data-testid="posts-container" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="region" 
            aria-live="polite"
            aria-label="Blog posts feed"
        >
            {records.map((item) => (
                <article 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
                    aria-labelledby={`title-${item.id}`}
                >
                    <div className="p-5 grow">
                        <time className="text-xs font-bold text-blue-600 uppercase">{item.date}</time>
                        <h3 id={`title-${item.id}`} className="text-xl font-bold mt-2 text-gray-900">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 mt-3 line-clamp-3">{item.description}</p>
                    </div>
                    <div className="p-4 bg-gray-50 border-t flex justify-end">
                        <button
                            className="text-red-700 hover:bg-red-50 px-3 py-2 rounded text-sm font-bold transition-colors border border-red-200"
                            onClick={() => setRecords(item.id)}
                            aria-label={`Delete post: ${item.title}`}
                        >
                            Delete Post
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default PostDisplay;