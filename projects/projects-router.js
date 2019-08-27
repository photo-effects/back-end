
const router = require("express").Router();

const Projects = require("./projects-model.js");


router.get("/api/projects", (req, res) => {
    Projects.find()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => res.send(err));
  });


  module.exports = router;