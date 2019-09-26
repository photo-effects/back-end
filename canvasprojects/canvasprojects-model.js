const db = require('../database/dbConfig.js');

module.exports = {
   getAll,
   getById,
   getTagsByProjectId,
   insert,
   remove,
   update,
   getProjectsByUser,
   insertTag
};

function getAll() {
   return db('canvasprojects')
      // .join("tags", "canvasprojects.id", "=", "tags.project_id")
      // .select("canvasprojects.*")
      // .then(projects => {
      //    return db('tags')
      //       // .where({ 'canvasprojects.id': 'tags.project_id'  })
      //       .select('tags.name')
      //       .then(tags => {
      //          // const result = { ...projects, tags: tags };
      //          // return result;
               
      //          const result = projects.map((project, key) => {
      //             const newtags = getTagsByProjectId(project[key])
      //             return {
      //               project,
      //               tags: newtags
      //             }
      //          })
      //          return result;
      //       })
      // })

   // return db('canvasprojects')
   //    .join("tags","tags.project_id", "=", "canvasprojects.id")
   //    .select("canvasprojects.*")
   //    .then(projects => {
   //       return projects
   //    })
}

function getById(projectId) {
   return db('canvasprojects')
      .where({ id: projectId })
      .select("canvasprojects.*")
      .then(projects => {
         return db('tags')
         .where({project_id: projectId})
         .select("tags.name as tag")
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
         "users.name", 
         "users.email",
         "users.user_id"
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

function insertTag(tag) {
   return db('tags')
      .insert(tag);
}
