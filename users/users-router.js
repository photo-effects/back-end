const router = require("express").Router();

const Users = require("./users-model.js");


router.get("/api/users", (req, res) => {
    Users.getUsers()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });


// Get Users

router.get('/users', async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users)
   } catch (err) {
    res.status(500).json(err)
   }
})

router.get('/users/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.getUserById(userId);
    res.status(201).json(user);
  } catch(err) {
    res.status(500).json(err)
  }
})

router.get('/users/:userId/projects', async (req, res) => {
  const { userId } = req.params;
  try {
     const canvasprojectsbyUserId = await Users.getProjectsByUser(userId);
     res.status(200).json(canvasprojectsbyUserId);
  } catch (err) {
     res.status(500).json({ error: "Error retrieving projects by User Id"})
  }
})
  
// Insert User

router.post("/users", async (req, res) => {
  const user = req.body;

  try {
    const newUser = await Users.insertUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;