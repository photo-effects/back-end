const db = require('../database/dbConfig.js');

module.exports = {
    getUsers,
    //findProject,
    insertUser,
    getUserById,
    getProjectsByUser
};

function getUsers() {
    return db('users');
    // return db('users').select('id', 'username', 'password');
}

function getUserById(userId) {
    return db('users')
       .where({ id: userId })
       .select("users.name", 'users.email')
}

function insertUser(newUser) {
    return db('users')
       .insert(newUser);
}

function getProjectsByUser(userId) {
    return db('canvasprojects')
       .where({ user_created_id: userId })
       .join("users", "canvasprojects.user_created_id", "=", "users.id")
       .select(
          "canvasprojects.*", 
          "users.name", 
          "users.email",
          "users.user_id"
       );
}