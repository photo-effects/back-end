
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { title: 'photo1', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566683148/f7cnfjzrnjiodlmganwz.jpg' },
   
  ])
};
