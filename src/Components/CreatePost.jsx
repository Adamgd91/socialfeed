import React, { useState } from "react";

function CreatePost(props) {
  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Post</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}

export default CreatePost;
