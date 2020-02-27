exports.up = function(knex) {
  return knex.schema.createTable("employees", employees => {
    employees.increments();

    employees.string("employee_name", 128).notNullable();

    employees
      .integer("department_number")
      .notNullable()
      .references("id")
      .inTable("departments")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employees");
};
