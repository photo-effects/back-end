const router = require("express").Router();
const CanvasProjects = require("./canvasprojects-model.js");

router.get('/', (req, res) => {
   CanvasProjects.get()
      .then(canvasprojects => {
         res.json(canvasprojects);
      })
      .catch(err => res.send(err))
})

module.exports = router;