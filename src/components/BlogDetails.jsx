import React from "react";
import DOMPurify from "dompurify";

const BlogDetails = ({ selectedPost, onBack }) => {

    if (!selectedPost) {
        return null;
    }

    return (
        <section className="min-h-screen bg-[#f4c62f] px-6 py-12">

            <div className="max-w-5xl mx-auto editor-shell p-10 bg-[#fffdf7]">
                <div className="flex gap-6">

                    <button
                        onClick={onBack}
                        className="expand-btn mb-8"
                    >
                        ← Back to Feed
                    </button>

                    <time className="text-md font-black tracking-[0.2em] uppercase text-gray-700 self-center">
                        {selectedPost.date}
                    </time>
                </div>

                <h1 className="text-6xl font-black mt-4 mb-10 leading-tight text-gray-900">
                    {selectedPost.title}
                </h1>

                <div
                    className="prose prose-lg max-w-none leading-8"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            selectedPost.description
                        ),
                    }}
                />
            </div>
        </section>
    );
};

export default BlogDetails;
