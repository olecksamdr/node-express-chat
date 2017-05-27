
exports.up = function(knex, Promise) { 
  return  knex.schema.createTable('auth_provider', function(table){
    table.increments('provider_id');
    table.string('hash', 128).notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.enum('provider_type', ['facebook', 'google', 'local']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auth_provider');
};
