exports.seed = function(knex) {
  return knex('canvasprojects').del()
    .then(function () {
      return knex('canvasprojects').insert([
        {
          p_name: "My First Project",
          p_description: "This is my first ever project",
          user_created_id: 1,
          user_created_google_id: 'google-oauth2|113561531601298466202',
          p_created_at: null,
          p_data: 'this is the project data',
          p_likes: 5,
          p_published: false
        },
        {
          p_name: "My Second Project",
          p_description: "This is my second ever project",
          user_created_id: 1,
          user_created_google_id: 'google-oauth2|113561531601298466202',
          p_created_at: null,
          p_data: 'this is the project data for my second project',
          p_likes: 10,
          p_published: true
        },
        {
          p_name: "My Third Project",
          p_description: "This is my third ever project",
          user_created_id: 2,
          user_created_google_id: 'auth0|5d8ae9ebf5d3b50c5ccc6489',
          p_created_at: null,
          p_data: 'this is the project data for my third project',
          p_likes: 10,
          p_published: true
        },
        {
          p_name: "My Fourth Project",
          p_description: "This is my fourth ever project",
          user_created_id: 2,
          user_created_google_id: 'auth0|5d8ae9ebf5d3b50c5ccc6489',
          p_created_at: null,
          p_data: 'this is the project data for my fourth project',
          p_likes: 10,
          p_published: true
        },
      ]);
    });
};
