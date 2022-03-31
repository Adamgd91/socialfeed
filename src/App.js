import "./style.css";

import React, { useState } from "react";

import CreatePost from "./Components/CreatePost";
import DisplayPosts from "./Components/DisplayPosts";
import NavBar from "./Components/NavBar";

function App() {
  const [entries, setEntries] = useState([]);

  function addNewPosts(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return (
    <div>
      <NavBar />
      <CreatePost addNewPost={addNewPosts} />
      <DisplayPosts parentEntries={entries} />
    </div>
  );
}

export default App;
