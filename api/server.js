require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const axios = require('axios');
const FormData = require('form-data');

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

server.post('/cloudinary/upload', (req, res) => {
    // const values = Object.values(req.files)
    // const promises = values.map(image => cloudinary.uploader.upload(image.path))
    // Promise
    //     .all(promises)
    //     .then(results => res.json(results))
    //     .catch((err) => res.status(400).json(err));
    const imageURL = req.body;
    cloudinary.uploader.upload(imageURL)
    Promise
        .all(promises)
        .then(results => res.json(results))
        .catch((err) => res.status(400).json(err));

    // cloudinary.v2.uploader.upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", 
    // function(error, result) {console.log(result, error); }); 
})

server.post('/cloudinary/upload2', async (req, res) => {
    const image = req.body;
    console.log(image)
    const uploadStr2 = "data:image/png;base64,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"

    const uploadStr = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="

    // const data = new FormData();
    // data.append("file", uploadStr);
    // data.append("upload_preset", "xvdlwjt9")

    try {
        
        // const res = await axios.post("https://api.cloudinary.com/v1_1/dn94qw6w7/image/upload", data)

        await cloudinary.v2.uploader.upload(req.body, {
            format: 'jpg',
            overwrite: true,
            // invalidate: true,
            // width: 810, height: 456, crop: "fill"
        })

        res.status(200).json({message: "Upload successful!"})
        // res.status(200).json({url: res.data.secure_url})
    } catch(err) {
        res.status(500).json(err.message)
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