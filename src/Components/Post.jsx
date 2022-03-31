import DisplayPosts from "./DisplayPosts";
import React from "react";

const Post = (props) => {
  return (
    <div>
      <div>
        <DisplayPosts parentEntries={props.post} />
      </div>
      <DisplayPosts parentEntries={props.userName} />
    </div>
  );
};

export default Post;
