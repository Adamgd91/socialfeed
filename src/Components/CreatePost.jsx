// import "./style.css";

import React, { useState } from "react";

const CreatePost = (props) => {
  const [post, setPost] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = {
      userName: userName,
      post: post,
    };
    console.log(newEntry);
    props.addNewPost(newEntry);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="container border-box rounded col-6"
      style={{ marginTop: "4em" }}
    >
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Post</label>
        <textarea
          className="form-control"
          rows="3"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "2em" }}
      >
        Create
      </button>
    </form>
  );
};

export default CreatePost;
