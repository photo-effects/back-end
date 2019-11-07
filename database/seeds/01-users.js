
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { 
      name: 'Jasmine Logan', 
      user_id: 'google-oauth2|113561531601298466202', 
      email: 'claridiva2000@gmail.com' 
    },
    { 
      name: 'jal9626@yahoo.com', 
      user_id: 'auth0|5d8ae9ebf5d3b50c5ccc6489', 
      email: 'jal9626@yahoo.com' 
    }
  ])
};
