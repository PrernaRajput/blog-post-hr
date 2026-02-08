import React from "react";
import Input from "../components/Input";
import PostDisplay from "../components/PostDisplay";
import { usePosts } from "../hooks/usePosts";

const Home = () => {
    const { 
        records, title, setTitle, description, 
        setDescription, addPost, deletePost 
    } = usePosts();

    return (
        <main className="container mx-auto p-6">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">DevBlog Engine</h1>
                <p className="text-gray-600 mt-2">Manage your technical insights</p>
            </header>

            <section className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-xl mb-12 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                <Input 
                    setTitle={setTitle} 
                    title={title} 
                    description={description} 
                    setDescription={setDescription} 
                />
                <button 
                    data-testid="create-button" 
                    className="w-100 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={addPost}
                >
                    Publish Post
                </button>
            </section>

            <section className="posts-section">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Feed</h2>
                {records.length === 0 ? (
                    <div className="text-center py-10 text-gray-400 border-2 border-dashed rounded-lg">
                        No posts published yet. Start writing!
                    </div>
                ) : (
                    <PostDisplay records={records} setRecords={deletePost} />
                )}
            </section>
        </main>
    );
};

export default Home;