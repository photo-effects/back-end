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
   // return db('canvasprojects')
   //    .join("tags", "canvasprojects.id", "=", "tags.project_id")
   //    .select("canvasprojects.*", "tags.name")

   const tags = db('canvasprojects')
   .join("tags", "canvasprojects.id", "=", "tags.project_id")
   .select("tags.name")

   return {...tags}
}

function getById(projectId) {
   // return db('canvasprojects')
   //    .where({ id: projectId})
   //    .first();

   // const tags = db('tags')
   //    .join("canvasprojects", "canvasprojects.id", "=", "tags.project_id")
   //    .where({ project_id: projectId })
   //    .select("tags.name", "tags.project_id")

   return db('canvasprojects')
      .where({ id: projectId })
      .select("canvasprojects.*")
      .then(projects => {
         return db('tags')
         .where({project_id: projectId})
         .select("tags.name")
         .then(tags => {
            const result = { ...projects[0], tags: tags };
            return result;
         })
      })
}

function getTagsByProjectId(projectId) {
   return db('tags')
      .where({ project_id: projectId })
      .select("tags.name", "tags.project_id")
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