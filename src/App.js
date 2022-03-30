import "./style.css";

import CreatePost from "./Components/CreatePost";
import DisplayPosts from "./Components/DisplayPosts";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";

function App() {
  return (
    <div>
      <h1>Social Feed</h1>
      <CreatePost />
      {/* <DisplayPosts />
      <NavBar />
      <Post /> */}
    </div>
  );
}

export default App;
