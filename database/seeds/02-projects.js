// exports.seed = function(knex, Promise) {
//   return knex('projects').insert([
//     { title: 'Seed_1', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201170/ho0ji7zczgnxnfpgxxvp.jpg', tags:'Gaming', public_id:"ho0ji7zczgnxnfpgxxvp"  },
//     { title: 'Seed_2', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201854/bzxzpo1fvggkbqaocvto.jpg', tags:'Memes', public_id:"bzxzpo1fvggkbqaocvto" },
//     { title: 'Seed_3', user_id: '2', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201953/py7kctx17kmaow0ecg0x.jpg', tags:'Funny' , public_id:"py7kctx17kmaow0ecg0x"},
//     { title: 'Seed_4', user_id: '2', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202011/mnolikdrobnodqgpmoy5.jpg', tags:'Memes' , public_id:"mnolikdrobnodqgpmoy5"},
//     { title: 'Seed_5', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg', tags: "Animals", public_id:"rv8qvq2siyxqpbtwnl4i" },
//     { title: 'Seed_6', user_id: '1', secure_url: 'https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202141/mmqkomy3wcki6tm2tgo2.jpg', tags: "Animals", public_id:"mmqkomy3wcki6tm2tgo2" },
//   ])
// };

exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      title: "Vivi Rocks!",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567201170/ho0ji7zczgnxnfpgxxvp.jpg",
      tags: "Gaming",
      public_id: "ho0ji7zczgnxnfpgxxvp"
    },
    {
      title: "Favorite Puppy!",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567202073/rv8qvq2siyxqpbtwnl4i.jpg",
      tags: "Animals",
      public_id: "rv8qvq2siyxqpbtwnl4i"
    },
    {
      title: "Awiens Exist",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567612422/gs2imsadeelyjl5y1q4d.jpg",
      tags: "Memes",
      public_id: "gs2imsadeelyjl5y1q4d"
    },
    {
      title: "Healthy Life",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567799211/euoqwnd9ytrnnthhce3f.jpg",
      tags: "Food",
      public_id: "euoqwnd9ytrnnthhce3f"
    },
    {
      title: "Tent Setup",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567659370/zqcz0vp7y4yxquknyut2.jpg",
      tags: "Nature",
      public_id: "zqcz0vp7y4yxquknyut2"
    },

    {
      title: "Gaming Tourney",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567799407/xvyj1tmkujadltoi807r.jpg",
      tags: "Gaming",
      public_id: "xvyj1tmkujadltoi807r"
    },
    {
      title: "Mr.Whiskers",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567799564/zrwp9whnypprg7awgik6.jpg",
      tags: "Animals",
      public_id: "zrwp9whnypprg7awgik6"
    },
    {
      title: "Me While Coding",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800100/zowjmbwlthc0x7xjnkws.png",
      tags: "Memes",
      public_id: "zowjmbwlthc0x7xjnkws"
    },
    {
      title: "Yummy Pancakes",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567799701/fopsvqcvod9m3emomwia.jpg",
      tags: "Food",
      public_id: "fopsvqcvod9m3emomwia"
    },
    {
      title: "Green Grass",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567799923/brjxgqqz8qiyxiaapg5e.jpg",
      tags: "Nature",
      public_id: "brjxgqqz8qiyxiaapg5e"
    },

    {
      title: "Throwback To Arcades",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800306/hns9onqugv6mxluyovfe.jpg",
      tags: "Gaming",
      public_id: "hns9onqugv6mxluyovfe"
    },
    {
      title: "Say Cheese!",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800406/guqlfpqvgkolftfhlbdw.jpg",
      tags: "Animals",
      public_id: "guqlfpqvgkolftfhlbdw"
    },
    {
      title: "Bad Code",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800641/uu16fj6byyrkaaqvqamw.jpg",
      tags: "Memes",
      public_id: "uu16fj6byyrkaaqvqamw"
    },
    {
      title: "Burger And Fries",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800746/lwmq9qp0yganmvlgiyzm.jpg",
      tags: "Food",
      public_id: "lwmq9qp0yganmvlgiyzm"
    },
    {
      title: "Boardwalk",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567800857/iweb5qnj7goygtrqqv1c.jpg",
      tags: "Nature",
      public_id: "iweb5qnj7goygtrqqv1c"
    },

    {
      title: "Candy Crush",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801492/ohpdim78vv9tfnno3pfz.jpg",
      tags: "Gaming",
      public_id: "ohpdim78vv9tfnno3pfz"
    },
    {
      title: "Quack",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801323/pzsz3mp1lhunlsz9o7r8.jpg",
      tags: "Animals",
      public_id: "pzsz3mp1lhunlsz9o7r8"
    },
    {
      title: "HTML Programming",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801220/itnhpeaw6awswoxybo9g.jpg",
      tags: "Memes",
      public_id: "itnhpeaw6awswoxybo9g"
    },
    {
      title: "Dessert",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801095/zknwbua8qqqfeaydsdzh.jpg",
      tags: "Food",
      public_id: "zknwbua8qqqfeaydsdzh"
    },
    {
      title: "Waterfall",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801013/ogrrpywapui500frlusv.jpg",
      tags: "Nature",
      public_id: "ogrrpywapui500frlusv"
    },

    {
      title: "PS4 Time",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801680/origfdujclaxhgysvtum.jpg",
      tags: "Gaming",
      public_id: "origfdujclaxhgysvtum"
    },
    {
      title: "Mufasa",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567801784/vhjx0zlkf5loqfeojvyz.jpg",
      tags: "Animals",
      public_id: "vhjx0zlkf5loqfeojvyz"
    },
    {
      title: "Computer Problems",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567802184/j0ydccdeceucvbryyv3s.jpg",
      tags: "Memes",
      public_id: "j0ydccdeceucvbryyv3s"
    },
    {
      title: "Cake Cake",
      user_id: "1",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567802283/rhdp9jif54yugiq5rpjt.jpg",
      tags: "Food",
      public_id: "rhdp9jif54yugiq5rpjt"
    },
    {
      title: "Row Row Your Boat",
      user_id: "2",
      secure_url:
        "https://res.cloudinary.com/dn94qw6w7/image/upload/v1567802363/qaapwp6wzbgkah2xc1wv.jpg",
      tags: "Nature",
      public_id: "qaapwp6wzbgkah2xc1wv"
    }
  ]);
};
