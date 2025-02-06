import axios from "axios";
import React, { useEffect, useState } from "react";

const Lec06_Part01 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => setPost(response.data))
    .catch(() => console.error("ERROR IS OCCURED"));
  });

  return (
    <>
      <div className="container-lec6">
        <div className="content-inputs-lec6">
          <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className="content-text-lec6">
          <p>Title <span> | </span> {post.title}</p>
          <p>Body <span> | </span> {post.body}</p>
        </div>
      </div>
    </>
  );
};

export default Lec06_Part01;
