// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: process.env.USER,
      password: process.env.PASS
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
