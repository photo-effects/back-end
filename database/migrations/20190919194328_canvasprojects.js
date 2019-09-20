exports.up = function(knex) {
  return knex.schema.createTable('canvasprojects', tbl => {
     tbl.increments();
     tbl.timestamp('created_at').defaultTo(knex.fn.now());
     tbl.foreign('user_id').references(users.id);
     tbl.string("canvasproject_data").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('canvasprojects');
};
