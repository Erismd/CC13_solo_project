import React from "react";
import "./App.css";
import CreateNavbar from "./components/createNavbar";
import Footer from "./components/footer";
import CreateNewPost from "./components/createNewPost";
import ViewPosts from "./components/viewPosts";
import { useSelector } from "react-redux";
import MyContact from "./components/contact.jsx";

function App() {
  const mainView = useSelector((state) => state.mainView);
  const contactView = useSelector((state) => state.contactView);
  return (
    <div className="App">
      <CreateNavbar />
      {/* <div className="main">{contactView ? <ViewPosts /> : <MyContact />}</div> */}
      <div className="main">{mainView ? <ViewPosts /> : <CreateNewPost />}</div>
      <Footer />
    </div>
  );
}

export default App;
