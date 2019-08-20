const dbEngine = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[dbEngine];
module.exports = require('knex')(config);

// module.exports = knex(knexConfig.development);


/*
DATABASE_URL=postgres://postgres:Rafeek123@host:5432/postgres
*/