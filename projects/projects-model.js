const db = require('../database/dbConfig.js');


module.exports = {
    find,
    addPost

};


function find() {
    return db('projects');
}

function addPost(post) {
    return db('projects').insert(post);
}