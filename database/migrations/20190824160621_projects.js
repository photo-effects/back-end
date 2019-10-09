exports.up = function(knex) {
    return knex.schema.createTable("projects", bl => {
      bl.increments();
      bl.string("title").notNullable();
      bl.integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      bl.timestamp('created_at').defaultTo(knex.fn.now());
      bl.string("public_id");
      bl.string("secure_url");
      bl.string("tags");
      bl.text("save_to_html-json").defaultTo("");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
  }
