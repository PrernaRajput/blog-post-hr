import {useEffect, useState} from "react";
import {addPostToDB, deletePostFromDB, getPosts} from "../utils/indexedDb";

const isValidString = (value) => typeof value === "string" && value.trim();

export const usePosts = () => {
  const [records, setRecords] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const storedPosts = await getPosts();

        setRecords(storedPosts);
      } catch (error) {
        console.error("Failed to load posts", error);
      }
    };

    loadPosts();
  }, []);

  const handleAddPost = async () => {
    const safeTitle = title?.trim() || "";

    const safeDescription = description?.trim() || "";

    if (!isValidString(safeTitle) || !isValidString(safeDescription)) {
      return;
    }

    const newRecord = {
      id: crypto.randomUUID(),

      title: safeTitle,

      description: safeDescription,

      date: new Date().toLocaleDateString(),
    };

    try {
      // save to indexed db
      await addPostToDB(newRecord);

      // update UI
      setRecords((prev) => [newRecord, ...prev]);

      setTitle("");

      setDescription("");
    } catch (error) {
      console.error("Failed to add post", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      // remove from indexed db
      await deletePostFromDB(postId);

      // update UI
      setRecords((prev) => prev.filter((item) => item.id !== postId));
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  return {
    records,

    title,
    setTitle,

    description,
    setDescription,

    addPost: handleAddPost,

    deletePost: handleDeletePost,
  };
};
