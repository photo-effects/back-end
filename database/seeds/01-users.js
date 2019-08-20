
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'Bob', password: 'bobpass' },
    { username: 'Max', password: 'maxpass' }
  ])
};
