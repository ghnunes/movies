exports.up = knex => knex.schema.createTable("movie_tags", table => {
    table.increments("id");
    table.text("note_id").references("id").inTable("movie_notes");
    table.integer("user_id").references("id").inTable("users");
    table.text("name");
  });
  
  
  exports.down = knex => knex.schema.dropTable("movie_tags");