
exports.up = function(knex) {
  return knex.schema

  .createTable("projects" ,tbl => {
      tbl.increments();

      tbl.string("name", 255)
        .notNullable()
        .unique();

      tbl.string("description", 255)
    
      tbl.bool('completed', false)
  })

  .createTable("resources", tbl => {
      tbl.increments();

      tbl.string("name", 255)
        .notNullable()
        .unique();
    
    tbl.string("description", 255)
  })

  .createTable("project-resource", tbl => {
      tbl.increments();

      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        
      tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

  })

  .createTable("Tasks", tbl => {
      tbl.increments();
      tbl.string("description", 255)
        .notNullable()
    
      tbl.string("notes", 255)

      tbl.bool('completed', false)

              
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

  })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('project-resource')
    .dropTableIfExists('Tasks')
};
