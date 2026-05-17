import React from "react";

function Input({ setTitle, title, description, setDescription }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="blog-title" className="mb-1 text-sm font-semibold text-gray-700">
                    Post Title <span aria-hidden="true">*</span>
                </label>
                <input 
                    id="blog-title"
                    className="p-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none" 
                    type="text" 
                    placeholder="e.g., Understanding React Hooks" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    data-testid="title-input"
                    aria-required="true"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="blog-desc" className="mb-1 text-sm font-semibold text-gray-700">
                    Content <span aria-hidden="true">*</span>
                </label>
                <textarea 
                    id="blog-desc"
                    className="p-2 border rounded h-32 focus:ring-2 focus:ring-blue-600 outline-none" 
                    placeholder="Write your technical insights here..." 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    data-testid="description-input" 
                    aria-required="true"
                />
            </div>
        </div>
    );
}

export default Input;