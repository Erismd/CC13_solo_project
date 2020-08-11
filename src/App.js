import React from "react";
import "./App.css";
import CreateNavbar from "./components/createNavbar";
import Footer from "./components/footer";
import CreateNewPost from "./components/createNewPost";
import ViewPosts from "./components/viewPosts";
import { useSelector } from "react-redux";

function App() {
  const mainView = useSelector((state) => state.mainView);
  return (
    <div className="App">
      <CreateNavbar />
      <div className="main">{mainView ? <ViewPosts /> : <CreateNewPost />}</div>
      <Footer />
    </div>
  );
}

export default App;
