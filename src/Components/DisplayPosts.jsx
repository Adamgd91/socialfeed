import React from "react";

function DisplayPosts(props) {
  return (
    <div
      className="container-fluid col-md-6 border-box rounded"
      style={{ marginTop: "4em" }}
    >
      <div>
        <h3>Post</h3>

        {props.parentEntries.map((entry, index) => {
          return (
            <p key={index}>
              {entry.post}
              {entry.userName}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayPosts;
