exports.up = function(knex) {
  return knex.schema.createTable("departments", departments => {
    departments.increments();

    departments
      .string("department_name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("departments");
};
