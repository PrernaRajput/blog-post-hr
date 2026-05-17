import React from "react";
import DOMPurify from "dompurify";

const BlogDetails = ({ selectedPost, onBack }) => {

    
    if (!selectedPost) {
        return null;
    }

    return (
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">

            <button
                onClick={onBack}
                className="mb-6 text-blue-600 font-semibold"
            >
                ← Back
            </button>

            <time className="text-sm text-gray-500">
                {selectedPost.date}
            </time>

            <h1 className="text-4xl font-bold mt-2 mb-6">
                {selectedPost.title}
            </h1>

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        selectedPost.description
                    ),
                }}
            />
        </section>
    );
};

export default BlogDetails;