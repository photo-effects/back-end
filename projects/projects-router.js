
const router = require("express").Router();
const cloudinary = require('cloudinary');
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

router.delete("/api/projects/:id", async (req,res) => {
  try {
    const count = await Projects.deletePost(req.params.id);
    if(count > 0) {
      await cloudinary.v2.uploader.destroy(req.body.public_id)
      // await cloudinary.v2.uploader.destroy()
      res.status(200).json({ message: `Project has been deleted! ${req.params.id}` })
    } else {
      res.status(404).json({ message: 'Project could not be found' })
    }
  } catch(error) {
    res.status(500).json({
      message: "Error removing project"
    })
  }
})


  module.exports = router;