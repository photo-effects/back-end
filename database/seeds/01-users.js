
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'Bob', password: 'bobpass', email: 'email@email.com' },
    { username: 'Max', password: 'maxpass', email: 'another@email.com' }
  ])
};
