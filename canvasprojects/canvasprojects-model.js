const db = require('../database/dbConfig.js');

module.exports = {
   getAll,
   getById,
   getTagsByProjectId,
   insert,
   remove,
   update,
   getProjectsByUser
};

function getAll() {
   return db('canvasprojects')
      .join("tags", "canvasprojects.id", "=", "tags.project_id")
      .select("canvasprojects.*")
}

function getById(projectId) {
   return db('canvasprojects')
      .where({ id: projectId})
      .first();
}

function getTagsByProjectId(projectId) {
   return db('tags')
      .where({ project_id: projectId })
      // .join(
      //    "canvasprojects", 
      //    "tags.project_id", 
      //    "=", 
      //    "canvasprojects.id"
      // )
      .select(
         "tags.name",
         // "canvasprojects.id"
      )
      // .select("tags.name")
}

function getProjectsByUser(userId) {
   return db('canvasprojects')
      .where({ user_created_id: userId })
      .join("users", "canvasprojects.user_created_id", "=", "users.id")
      .select(
         "canvasprojects.*", 
         "users.username", 
         "users.email"
      );
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