import React, { useState } from "react";

function DisplayPosts(props) {
  const [buttonClass, setButtonClass] = useState("inactive");
  const [dislikedButtonClass, setDislikedButtonClass] = useState("inactive");
  const handleClick = () => {
    if (buttonClass === "inactive") {
      setButtonClass("liked");
    } else {
      setButtonClass("inactive");
    }
  };

  const dislikedClick = () => {
    if (dislikedButtonClass === "inactive") {
      setDislikedButtonClass("dislike");
    } else {
      setDislikedButtonClass("inactive");
    }
  };
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
                className="col-md-6 bold"
                style={{
                  marginTop: "1em",
                  marginBottom: "1em",
                  fontWeight: "bold",
                }}
              >
                {entry.userName}
              </div>
              <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                {entry.post}
              </div>
              <div className="btns">
                <button className={buttonClass} onClick={handleClick}>
                  Like
                </button>
                <button className={dislikedButtonClass} onClick={dislikedClick}>
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
