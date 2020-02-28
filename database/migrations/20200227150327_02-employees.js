exports.up = function(knex) {
  return knex.schema.createTable("employees", employees => {
    employees.increments();

    employees.string("employee_name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employees");
};
