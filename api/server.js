require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const usersRouter = require('../users/users-router.js');
const projectsRouter = require('../projects/projects-router.js');

const server = express();

// cloudinary config
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  })

server.use(express.json());
server.use(cors());
server.use(formData.parse());


server.use('/', usersRouter);
server.use('/', projectsRouter);

server.get('/', (req, res) => {
    res.send('Welcome to the Back-end for Photo Effects! :) Please enjoy your stay! Working try connecting! xoxo :)')
});



// After clicking "Choose File" this pushes image to cloudinary db
server.post('/image-upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(results => res.json(results))
        .catch((err) => res.status(400).json(err));
})





module.exports = server;