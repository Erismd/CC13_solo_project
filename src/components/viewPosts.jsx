import React, { useEffect, setState } from "react";
import "../styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ViewPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    axios.get("/main").then((res) => {
      console.log(res.data);
      res.data.forEach((post) => {
        dispatch({
          type: "ADD_NEW_POST",
          posts: post,
        });
      });
    });
  }, []);

  const createPosts = () => {
    return posts.map((post) => {
      return (
        <div className="post">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.contents || "" }}></div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="body">
        {createPosts()}
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </>
  );
}
