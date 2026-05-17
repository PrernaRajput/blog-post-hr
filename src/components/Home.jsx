import React from "react";
import Input from "../components/Input";
import PostDisplay from "../components/PostDisplay";

const Home = ({
    records,
    title,
    setTitle,
    description,
    setDescription,
    addPost,
    deletePost,
    setSelectedPost,
}) => {

    return (
        <main className="min-h-screen px-6 py-10" id="main-content">

            <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-20">

                <div>
                    <p className="uppercase tracking-[0.3em] text-sm font-bold mb-4">
                        Editorial blogging platform
                    </p>

                    <h1 className="text-6xl font-black leading-none mb-6 text-gray-900">
                        Write stories
                        <br />
                        worth reading.
                    </h1>

                    <p className="text-xl leading-9 max-w-xl text-gray-800">
                        Create beautiful technical articles, developer journals,
                        tutorials, and product stories with a playful modern editor.
                    </p>
                </div>

                <div className="hero-illustration flex items-center justify-center">
                    <div className="bg-white border-[3px] border-black rounded-3xl p-10 rotate-[-4deg] shadow-2xl">
                        <div className="text-7xl">📝</div>
                    </div>
                </div>
            </section>

            <section
                className="max-w-4xl mx-auto form-shell p-8 mb-20"
                aria-labelledby="form-heading"
            >
                <h2
                    id="form-heading"
                    className="text-3xl font-black mb-8 text-gray-900"
                >
                    Create New Post
                </h2>

                <Input
                    setTitle={setTitle}
                    title={title}
                    description={description}
                    setDescription={setDescription}
                />

                <button
                    data-testid="create-button"
                    className="publish-btn w-full mt-8"
                    onClick={addPost}
                    aria-disabled={!title || !description}
                >
                    Publish Post
                </button>
            </section>

            <section
                aria-label="Recent Posts"
                className="max-w-6xl mx-auto"
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-4xl font-black text-gray-900">
                        Latest Posts
                    </h2>

                    <div className="bg-black text-white rounded-full px-5 py-2 font-bold">
                        {records.length} Articles
                    </div>
                </div>

                {records.length === 0 ? (
                    <div
                        role="status"
                        className="editor-shell text-center py-20 px-8"
                    >
                        <div className="text-6xl mb-6">📚</div>

                        <h3 className="text-3xl font-black mb-4">
                            No posts yet
                        </h3>

                        <p className="text-lg text-gray-700">
                            Your beautifully written articles will appear here.
                        </p>
                    </div>
                ) : (
                    <PostDisplay
                        records={records}
                        deletePost={deletePost}
                        setSelectedPost={setSelectedPost}
                    />
                )}
            </section>
        </main>
    );
};

export default Home;
