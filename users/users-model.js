const db = require('../database/dbConfig.js');


module.exports = {
    find,
    findProject

};

function find() {
    return db('users');
    // return db('users').select('id', 'username', 'password');
}

function findProject() {
    return db('projects');
}