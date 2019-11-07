require('dotenv').config();
const proxy = require('html2canvas-proxy');
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const bodyParser = require('body-parser');

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

// server.use(express.json());

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

server.use(cors());
server.use(formData.parse());

server.use('/', proxy());

server.use('/', usersRouter);
server.use('/', projectsRouter);
server.use('/canvas', canvasprojectsRouter);

server.get('/home', (req, res) => {
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
    const { image, options } = req.body;
 
    try {
        const result = await cloudinary.v2.uploader.upload(image, options) 
        res.status(200).json(result);
        console.log(result.secure_url);
    } catch(err) {
        res.status(500).json(err)
    }
})

server.post('/cloudinary/upload3', async (req, res) => {
    const { image, options } = req.body;

    const testImage = "data:image/png;base64iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVBhXY/xfr84AA0xQGgxwcRgYAFQWAa3rgm4EAAAAAElFTkSuQmCC";
 
    try {
        await cloudinary.v2.uploader.explicit(image, options)
        res.status(200).json({message: "Upload successful:", url: res.secure.url})
    } catch(err) {
        res.status(500).json(err)
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