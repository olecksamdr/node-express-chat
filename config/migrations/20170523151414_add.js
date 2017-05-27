
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('avatar_url', 150);
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('avatar_url');
  });
};
