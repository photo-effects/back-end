const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());



server.get('/', (req, res) => {
    res.send('Welcome to the Back-end for Photo Effects! :) Please enjoy your stay!')

})


module.exports = server;