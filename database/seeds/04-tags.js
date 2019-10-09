exports.seed = function(knex) {
  return knex('tags').del()
    .then(function () {
      return knex('tags').insert([
        {
          name: 'funny',
          project_id: 1
        },
        {
          name: '80s',
          project_id: 1
        },
        {
          name: '90s',
          project_id: 1
        },
        {
          name: 'inspirational',
          project_id: 1
        },
        {
          name: 'memes',
          project_id: 2
        },
        {
          name: 'animals',
          project_id: 2
        },
        {
          name: 'funny',
          project_id: 2
        },
        {
          name: '80s',
          project_id: 2
        },
        {
          name: 'science',
          project_id: 2
        },
        {
          name: 'politics',
          project_id: 2
        },
        {
          name: 'memes',
          project_id: 3
        },
        {
          name: 'animals',
          project_id: 3
        },
        {
          name: 'funny',
          project_id: 3
        },
        {
          name: '80s',
          project_id: 3
        },
        {
          name: 'science',
          project_id: 3
        },
        {
          name: 'animals',
          project_id: 4
        },
        {
          name: 'funny',
          project_id: 4
        },
        {
          name: '80s',
          project_id: 4
        },
        {
          name: 'science',
          project_id: 4
        },
      ]);
    });
};
