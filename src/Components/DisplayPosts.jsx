import React, { useState } from "react";

function DisplayPosts(props) {
  return (
    <div
      className="container-fluid col-md-6 border-box rounded"
      style={{ marginTop: "4em" }}
    >
      <div>
        <h3 style={{ textAlign: "Center" }}>Posts</h3>

        {props.parentEntries.map((entry, index) => {
          return (
            <div className="border-bottom border-dark" key={index}>
              <div
                className="col-md-6"
                style={{ marginTop: "1em", marginBottom: "1em" }}
              >
                {entry.userName}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                {entry.post}
              </div>
              <div>
                <button
                  className="btn btn-secondary float-end"
                  onClick="hi"
                  style={{ marginTop: "-1em", marginLeft: "1em" }}
                >
                  Like
                </button>
                <button
                  className="btn btn-secondary float-end"
                  style={{ marginTop: "-1em" }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayPosts;
