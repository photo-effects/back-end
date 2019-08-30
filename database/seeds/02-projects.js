
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { title: 'FF9:Vivi', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201170/ho0ji7zczgnxnfpgxxvp.jpg', tags:'Animals', public_id:"ho0ji7zczgnxnfpgxxvp"  },
    { title: 'Architect', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201854/bzxzpo1fvggkbqaocvto.jpg', tags:'Memes', public_id:"bzxzpo1fvggkbqaocvto" },
    { title: 'Day At The Park', user_id: '2', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201953/py7kctx17kmaow0ecg0x.jpg', tags:'Funny' , public_id:"py7kctx17kmaow0ecg0x"},
    { title: 'Beautiful Day', user_id: '2', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202011/mnolikdrobnodqgpmoy5.jpg', tags:'Memes' , public_id:"mnolikdrobnodqgpmoy5"},
    { title: 'I Love My Doggy!', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg', tags: "Animals", public_id:"rv8qvq2siyxqpbtwnl4i" },
    { title: 'Ballin!', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202141/mmqkomy3wcki6tm2tgo2.jpg', tags: "Animals", public_id:"mmqkomy3wcki6tm2tgo2" },
  ])
};
