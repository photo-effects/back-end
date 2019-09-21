const db = require('../database/dbConfig.js');

module.exports = {
   getAll,
   getById,
   insert,
   remove,
   update,
   findProjectsByUser
};

function getAll() {
   return db('canvasprojects');
}

function getById(projectId) {
   return db('canvasprojects')
      .where({ id: projectId})
      .first();
}

function insert(project) {
   return db('canvasprojects')
      .insert(project);
}

function remove(projectId) {
   return db('canvasprojects')
      .where({ id: projectId })
      .del();
}

function update(projectId, changes) {
   return db('canvasprojects')
      .where({ id: projectId })
      .update(changes);
}

function findProjectsByUser(id) {
   return db('canvasprojects')
       .where({ user_created_id: id })
       .join("users", "canvasprojects.user_created_id", "=", "users.id")
       .select("canvasprojects.*", "users.name", "users.id", "users.email")
}