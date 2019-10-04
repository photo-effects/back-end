exports.up = function(knex) {
  return knex.schema.createTable('tags', tbl => {
     tbl.increments();
     tbl.string('name', 50).notNullable();
     tbl.integer('project_id').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tags');
};
