exports.up = function(knex) {
  return knex.schema.createTable('canvasprojects', tbl => {
    tbl.increments();
    tbl.string('p_name', 100);
    tbl.string('p_description', 150);
    tbl.integer('user_created_id')
    .unsigned().references('id').inTable('users')
    .onDelete('CASCADE').onUpdate('CASCADE');
    tbl.string('user_created_google_id').notNullable();
    tbl.timestamp('p_created_at').defaultTo(knex.fn.now());
    tbl.string("p_data").notNullable();
    tbl.integer('p_likes').defaultTo(0);
    tbl.boolean('p_published');
    tbl.string('p_image');
    tbl.string('public_id').defaultTo('');
    tbl.string('secure_url').defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('canvasprojects');
};
