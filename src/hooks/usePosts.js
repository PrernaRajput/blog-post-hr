import { useState } from "react";

const isValidString = ( value ) =>
    typeof value === 'string' && value.trim();

export const usePosts = () => {
    const [records, setRecords] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);

    const addPost = () => {
        const safeTitle = title || '';
        const safeDescription = description || '';

        if ( isValidString( title ) && isValidString( description ) ) {

            const newRecord = {
                id,
                title: safeTitle,
                description: safeDescription,
                date: new Date().toLocaleDateString(),
            };

            setRecords([...records, newRecord]);

            setId((prevId) => prevId + 1);

            setTitle('');
            setDescription('');
        }
    };

    const deletePost = (postId) => {
        setRecords(prev => prev.filter(item => item.id !== postId));
    };

    return { records, title, setTitle, description, setDescription, addPost, deletePost };
};