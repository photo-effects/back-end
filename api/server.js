require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const usersRouter = require('../users/users-router.js');
const projectsRouter = require('../projects/projects-router.js');
const canvasprojectsRouter = require('../canvasprojects/canvasprojects-router.js');

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
server.use('/canvas', canvasprojectsRouter);

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

server.post('/cloudinary/upload', async (req, res) => {
    // const values = Object.values(req.files)
    // const promises = values.map(image => cloudinary.uploader.upload(image.path))
    // Promise
    //     .all(promises)
    //     .then(results => res.json(results))
    //     .catch((err) => res.status(400).json(err));
    const imageURL = req.body;

    try {
        await cloudinary.uploader.upload(imageURL)
        res.json({message: "Uploaded"})
    } catch (err) {
        res.status(500).json({error: "Error uploading"})
    }
})


server.delete('/image-delete', async (req, res) => {
    try {
    await cloudinary.v2.uploader.destroy(req.body.public_id);
    res.status(200).json({ message: `Image deleted` })
    }
    catch(err) {
        res.status(500).json({
            message: 'Error removing!'
        })
    }
})





module.exports = server;