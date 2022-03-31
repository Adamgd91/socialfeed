import React from "react";

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
              <div>{entry.post}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayPosts;
