const db = require('../database/dbConfig.js');


module.exports = {
    getUsers,
    //findProject,
    insertUser,
    getUserById
};

function getUsers() {
    return db('users');
    // return db('users').select('id', 'username', 'password');
}

// function findProject() {
//     return db('projects');
// }

function getUserById(userId) {
    return db('users')
       .where({ id: userId })
       .select("users.username", 'users.email')
}

function insertUser(newUser) {
    return db('users')
       .insert(newUser);
 }