/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import { usePosts } from "./hooks/usePosts";

const App = () => {
    const {
        records,
        title,
        setTitle,
        description,
        setDescription,
        addPost,
        deletePost,
    } = usePosts();

    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="App">
            {
                selectedPost ? (
                    <BlogDetails
                        selectedPost={selectedPost}
                        onBack={() => setSelectedPost(null)}
                    />
                ) : (
                    <Home
                        records={records}
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        addPost={addPost}
                        deletePost={deletePost}
                        setSelectedPost={setSelectedPost}
                    />
                )
            }
        </div>
    );
};

export default App;
