const router = require("express").Router();
const CanvasProjects = require("./canvasprojects-model.js");

router.get('/', async (req, res) => {
  try {
   const canvasprojects = await CanvasProjects.getAll();
   res.status(200).json(canvasprojects)
  } catch (err) {
   res.status(500).json({ error: "Error retrieving all projects"})
  }
});

router.get('/:projectId', async (req, res) => {
   const { id } = req.params;

   try {
      const canvasprojectsById = await CanvasProjects.getById(id);
      res.status(200).json(canvasprojectsById)
   } catch (err) {
      res.status(500).json({ error: "Error retrieving projects by Id"})
   }
})

router.post('/', async (req, res) => {
   const project = req.body;

   try {
      const newProject = await CanvasProjects.insert(project);
      res.status(201).json(newProject);
   } catch (err) {
      res.status(500).json({ error: "Error posting new project"})
   }
})

module.exports = router;