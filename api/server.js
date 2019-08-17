const express = require('express');
const server = express();
let pg = require('pg');

let connect = "postgres://test:Rafeek123@localhost/test"

server.get('/', (req, res) => {
 
    // res.send('I am alive!!')

})


module.exports = server;