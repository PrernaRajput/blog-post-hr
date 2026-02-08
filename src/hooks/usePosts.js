import { useState } from "react";

export const usePosts = () => {
    const [records, setRecords] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);

    const addPost = () => {
        if (title.trim() && description.trim()) {
            const newRecord = { id, title, description, date: new Date().toLocaleDateString() };
            setRecords([...records, newRecord]);
            setId(prevId => prevId + 1);
            setTitle("");
            setDescription("");
        }
    };

    const deletePost = (postId) => {
        setRecords(prev => prev.filter(item => item.id !== postId));
    };

    return { records, title, setTitle, description, setDescription, addPost, deletePost };
};