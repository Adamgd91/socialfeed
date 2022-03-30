// import "./style.css";

import React, { useState } from "react";

function CreatePost(props) {
  return (
    <form
      action=""
      className="container border-box rounded col-6"
      style={{ marginTop: "4em" }}
    >
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Post</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <button className="btn btn-primary">Create</button>
    </form>
  );
}

export default CreatePost;
