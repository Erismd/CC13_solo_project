// server/app.js
const express = require("express");
const path = require("path");
const db = require("./knex.js");
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());
app.use(express.urlencoded({
  entended: true
}))

const posts = [];

app.get("/main", async (req, res) => {
  try {
    const blogs = await db.select().table("blogs");
    res.json(blogs);
  } catch (err) {
    console.error("Error loading blogs!", err);
    res.sendStatus(500);
  }
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    const title = req.body.title;
    const contents = req.body.contents;
    const post = { title: title, content: contents };
    const result = await db("blogs").insert({
      title,
      contents,
    });
    return res.redirect("/");
  } catch (err) {
    console.error("Error loading blogs!", err);
    res.sendStatus(500);
  }
});

app.get("/posts", (req, res) => {
  posts.forEach((post) => {
    res.render("post", {
      title: post.title,
      content: post.content,
    });
  });
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
