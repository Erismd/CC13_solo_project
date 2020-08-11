require("dotenv").config();
const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const blogs = JSON.parse(fs.readFileSync("./data/randomdata.json"));
    for (const blog of blogs) {
      const title = blog.title;
      const contents = blog.contents;

      const result = await db("blogs").insert({
        title,
        contents,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
