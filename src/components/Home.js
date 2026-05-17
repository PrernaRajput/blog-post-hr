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
        // Inside Home.js return...
        <main className="container mx-auto p-6" id="main-content">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">DevBlog Engine</h1>
            </header>

            <section className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-xl mb-12 border border-gray-200" aria-labelledby="form-heading">
                <h2 id="form-heading" className="text-xl font-semibold mb-4 text-gray-800">Create New Post</h2>
                <Input
                    setTitle={setTitle}
                    title={title}
                    description={description}
                    setDescription={setDescription}
                />
                <button
                    data-testid="create-button"
                    className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded shadow-md focus:ring-4 focus:ring-blue-300 transition-all"
                    onClick={addPost}
                    aria-disabled={!title || !description}
                >
                    Publish Post
                </button>
            </section>

            <section aria-label="Recent Posts">
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Feed</h2>
                {records.length === 0 ? (
                    <div role="status" className="text-center py-10 text-gray-500 border-2 border-dashed rounded-lg">
                        No posts available. Your feed is currently empty.
                    </div>
                ) : (
                    <PostDisplay records={records} setRecords={deletePost} />
                )}
            </section>
        </main>
    );
};

export default Home;