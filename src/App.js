/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "h8k-components";
import Home from "./components/Home";

const title = "Blog Post";

const App = () => {
    return (
        <div className="App">
            <nav class="navbar navbar-light bg-light">
                <div class="navbar" href="#">
                    <img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                    {title}
                </div>
            </nav>
            <Home />
        </div>
    );
};

export default App;
