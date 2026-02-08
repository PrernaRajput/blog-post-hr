import React from "react";

const PostDisplay = ({ records, setRecords }) => {
    return (
        <div data-testid="posts-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {records.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
                    <div className="p-5 flex-grow">
                        <span className="text-xs font-bold text-blue-500 uppercase">{item.date}</span>
                        <h3 className="text-xl font-bold mt-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 mt-3 line-clamp-3">{item.description}</p>
                    </div>
                    <div className="p-4 bg-gray-50 border-t flex justify-end">
                        <button
                            className="text-red-600 hover:bg-red-50 px-3 py-1 rounded text-sm font-semibold transition-colors"
                            onClick={() => setRecords(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default PostDisplay;