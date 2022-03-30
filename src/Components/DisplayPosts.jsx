import React, { useState } from "react";

function DisplayPosts(props) {
  return (
    <div
      className="container-fluid col-md-6 border-box rounded"
      style={{ marginTop: "4em" }}
    >
      <div>
        <h3>Post</h3>
        <table className="table">
          <tbody>
            {props.parentEntries.map((entry, index) => {
              return (
                <tr key={index}>
                  <td>{entry.post}</td>
                  <td>{entry.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayPosts;
