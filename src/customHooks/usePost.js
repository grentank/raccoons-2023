import React, { useState } from "react";
import axios from "axios";

export default function usePost(posts) {
  const [allPosts, setAllPosts] = useState(posts || []);

  const postSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target.description.value || !e.target.file.files[0]) return;
    const formData = new FormData();
    formData.append("description", e.target.description.value);
    formData.append("file", e.target.file.files[0]);
    e.target.reset();
    axios
      .post("/api/post", formData)
      .then((res) => {
        setAllPosts([...allPosts, res.data]);
      })
      .catch((err) => console.log("----", err.response.data));
  };

   const handleError = (e)=> {
    e.target.onerror = null;
    e.target.src = '/img/nofile.jpeg';
  };


  const deletePostHandler = (id) => {
    axios
      .delete(`/api/post/${id}`)
      .then((res) => {
        setAllPosts(allPosts.filter((post) => post.id !== id));
      })
      .catch((err) => console.log(err.response.data));
  };

  return { postSubmitHandler, allPosts, handleError, deletePostHandler };
}
