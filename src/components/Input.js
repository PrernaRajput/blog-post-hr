import React from "react";

function Input({ setTitle, title, description, setDescription }) {
    return (
        <div className="flex flex-col gap-4">
            <input 
                className="p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none" 
                type="text" 
                placeholder="Blog Title..." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                data-testid="title-input" 
            />
            <textarea 
                className="p-2 border rounded h-32 focus:ring-2 focus:ring-blue-400 outline-none" 
                placeholder="Write your content here..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                data-testid="description-input" 
            />
        </div>
    );
}

export default Input;