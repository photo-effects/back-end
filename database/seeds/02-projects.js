
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { title: 'photo1', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566683148/f7cnfjzrnjiodlmganwz.jpg', tags:'Animals' },
    { title: 'photo2', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566871880/dgviedbtmf3qhgh2qcts.jpg', tags:'Memes' },
    { title: 'photo3', user_id: '2', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566872005/ywn0ky1ao0czyrl21azl.png', tags:'Funny' },
    { title: 'photo4', user_id: '2', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566872179/hzbho5goxv6ez3fqhjce.jpg', tags:'Memes' },
    { title: 'photo5', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1567120557/sqplraecxttjbj2i4fkx.jpg', tags: "Animasl", public_id:"sqplraecxttjbj2i4fkx" }
    
   
  ])
};
