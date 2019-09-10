const db = require("../database/dbConfig.js");

module.exports = {
  find,
  addPost,
  deletePost,
  sorting
};

function find() {
  return db("projects");
}

function addPost(post) {
  return db("projects").insert(post);
}

function deletePost(id) {
  return db("projects")
    .where("id", id)
    .del();
}

function sorting() {
  return db("projects").orderBy("title", "asc");
}
