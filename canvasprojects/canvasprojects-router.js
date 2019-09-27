const router = require("express").Router();
const CanvasProjects = require("./canvasprojects-model.js");

router.get('/', (req, res) => {
   res.status(200).json({ message: "You're inside Canvas Projects Router!" });
})

// GET Methods

router.get('/projects', async (req, res) => {
  try {
   const canvasprojects = await CanvasProjects.getAll();
   res.status(200).json(canvasprojects)
  } catch (err) {
   res.status(500).json(err)
  }
});

router.get('/:projectId', async (req, res) => {
   const { projectId } = req.params;
   try {
      const canvasprojectsByProjectId = await CanvasProjects.getById(projectId);
      res.status(200).json(canvasprojectsByProjectId)
   } catch (err) {
      res.status(500).json({ error: "Error retrieving project by Id"})
   }
})

router.get('/:projectId/tags', async (req, res) => {
   const { projectId } = req.params;
   try {
      const tagsbyProjectId = await CanvasProjects.getTagsByProjectId(projectId);
      res.status(200).json(tagsbyProjectId);
   } catch (err) {
      res.status(500).json(err)
   }
})

// Other Project Methods

router.post('/', async (req, res) => {
   const project = req.body;

   try {
      const newProject = await CanvasProjects.insert(project);
      res.status(201).json(newProject);
   } catch (err) {
      res.status(500).json({ error: "Error posting new project"})
   }
})

// Post Tags

router.post('/tags', async (req, res) => {
   const tag = req.body;
   try {
      const newTag = await CanvasProjects.insertTag(tag);
      res.status(201).json(newTag);
   } catch (err) {
      res.status(500).json({error: "Error posting tag"})
   }
})

module.exports = router;