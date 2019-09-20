// Update with your config settings.

module.exports = {

  development: {
    client:'postgresql',
    connection: {
      database: 'photoeffects',
      user: 'postgres',
      password: 'long4229beach',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations' 
    },
    seeds: {
      directory: './database/seeds'
  }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations' 
    },
    seeds: {
      directory: './database/seeds'
  }
  }

};

