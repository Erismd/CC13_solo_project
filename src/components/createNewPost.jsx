import React from "react";
import "../styles/styles.css";
import { useSelector } from "react-redux";

export default function CreateNewPost() {
  const title = useSelector((state) => state.title);
  const contents = useSelector((state) => state.contents);

  return (
    <>
      <form action="/create" method="POST">
        <h1>Create New Post</h1>
        <input
          type="text"
          name="title"
          placeHolder="title"
          size="39"
          required
        ></input>
        <br />
        <br />
        <textarea
          name="contents"
          placeHolder="contents"
          rows="8"
          cols="41"
          required
        ></textarea>
        <br />
        <br />
        <input value="Post" type="submit"></input>
      </form>
    </>
  );
}
