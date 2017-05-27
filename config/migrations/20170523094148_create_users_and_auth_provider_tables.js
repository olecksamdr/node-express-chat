
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id');
    table.string('first_name', 80).notNullable(); 
    table.string('last_name', 80).notNullable();
    table.string('email', 120).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
