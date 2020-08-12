import React from "react";
import "../styles/styles.css";
import { useSelector } from "react-redux";
import MyStatefulEditor from "../components/RichTextEditior";
import axios from "axios";

export default function CreateNewPost() {
  const editcontents = useSelector((state) => state.editcontents);

  async function postBlog() {
    const title = document.getElementById("title").value;
    const post = { title: title, contents: editcontents };
    await axios.post("/create", post)

  }

  return (
    <>
      <form className="body">
        <h1>Create New Post</h1>
        <input
          id="title"
          type="text"
          name="title"
          placeHolder="title"
          size="80"
          required
        ></input>
        <br />
        <br />
        <MyStatefulEditor />
        {/* <textarea
          name="contents"
          placeHolder="contents"
          rows="8"
          cols="41"
          required
        ></textarea> */}
        <br />
        <br />
        {/* <a value="Post" class="myButton" onClick={postBlog}>POST</a> */}
        <button value="Post" className="myButton" onClick={postBlog}>POST</button>
      </form>
    </>
  );
}
