import { useState } from "react";

const isValidString = (value) =>
    typeof value === "string" && value.trim();

export const usePosts = () => {

    const [records, setRecords] = useState([]);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");


    const addPost = () => {

        const safeTitle = title?.trim() || "";

        const safeDescription = description?.trim() || "";

        if (
            !isValidString(safeTitle) ||
            !isValidString(safeDescription)
        ) {
            return;
        }

        const newRecord = {
            id: crypto.randomUUID(),
            title: safeTitle,
            description: safeDescription,
            date: new Date().toLocaleDateString(),
        };

        setRecords((prev) => [newRecord, ...prev]);

        setTitle("");

        setDescription("");
    };

    const deletePost = (postId) => {

        setRecords(
            (prev) => prev.filter(
                (item) => item.id !== postId
            )
        );

    };

    return {
        records,
        title,
        setTitle,
        description,
        setDescription,
        addPost,
        deletePost,

    };
};