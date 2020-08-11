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
    console.log("!!!!", posts);
    return posts.map((post) => {
      return (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.contents.substring(0, 150) + " ..."}</p>
          <a
            href="#"
            onClick={() => {
              dispatch({ type: "SWITCH_PAGE" });
            }}
          >
            Read More
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <section>
        {createPosts()}
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </>
  );
}
