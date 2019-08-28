
const router = require("express").Router();

const Projects = require("./projects-model.js");


router.get("/api/projects", (req, res) => {
    Projects.find()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => res.send(err));
  });

  router.post("/api/projects", async(req, res) => {
    const post = req.body;
    try {
        if(post.title) {
            const newPost = await Projects.addPost(post);
            res.status(201).json(newPost);
        } else {
            res.status(400).json({err: 'provide title'})
        }
    } catch(err) {
        res.status(500).json(err);
    }
})


  module.exports = router;