
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { title: 'FF9:Vivi', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201170/ho0ji7zczgnxnfpgxxvp.jpg', tags:'Animals', public_id:"ho0ji7zczgnxnfpgxxvp"  },
    { title: 'photo2', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566871880/dgviedbtmf3qhgh2qcts.jpg', tags:'Memes', public_id:"dgviedbtmf3qhgh2qcts" },
    { title: 'photo3', user_id: '2', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566872005/ywn0ky1ao0czyrl21azl.png', tags:'Funny' , public_id:"ywn0ky1ao0czyrl21azl"},
    { title: 'photo4', user_id: '2', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1566872179/hzbho5goxv6ez3fqhjce.jpg', tags:'Memes' , public_id:"hzbho5goxv6ez3fqhjce"},
    { title: 'photo5', user_id: '1', secure_url: 'https://res.cloudinary.com/cloudreyaad/image/upload/v1567052338/nks3rwec8bfw0cnhqetw.jpg', tags: "Animals", public_id:"nks3rwec8bfw0cnhqetw" } 
   
  ])
};
