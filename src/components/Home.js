import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home () {
    const [records, setRecords] = useState( [] );
    const [title, setTitle] = useState( "" );
    const [description, setDescription] = useState( "" );

    const addPost = () => {
        if ( title.trim() !== "" && description.trim() !== "" ) {
            const newRecord = { title, description };
            setRecords( [...records, newRecord] );
            setTitle( "" );
            setDescription( "" );
        }
    }

    return (
        <div className="text-center ma-20">
            <div className="mb-20">
                <Input setTitle={setTitle} title={title} description={description} setDescription={setDescription} />
                <button data-testid="create-button" className="mt-10" onClick={() => addPost()}>
                    Create Post
                </button>
            </div>
            <div className="posts-section">
                <PostDisplay records={records} setRecords={setRecords} />
            </div>
        </div>
    );
}

export default Home;
