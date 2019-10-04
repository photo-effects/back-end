exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
      users.increments();
      //users.string("username").notNullable().unique();
      // users.string("password").notNullable();
      users.string('email').notNullable().unique();
      users.string('user_id').notNullable().unique();
      users.string('name').notNullable();
      users.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };