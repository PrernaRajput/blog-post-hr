/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import { usePosts } from "./hooks/usePosts";

const title = "Blog Post";

const App = () => {
      const {
            records, deletePost
      } = usePosts();
     const [selectedPost, setSelectedPost] = useState(null);
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <div className="navbar" href="#">
                    <img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                    {title}
                </div>
            </nav>
            {
                selectedPost ? (
                    <BlogDetails
                        selectedPost={selectedPost}
                        onBack={() => setSelectedPost(null)}
                    />
                ) : (
                    <Home
                        records={records}
                        deletePost={deletePost}
                        setSelectedPost={setSelectedPost}
                    />
                )
            }
        </div>
    );
};

export default App;
