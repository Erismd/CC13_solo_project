// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truckstop`,
    searchPath: "public",
  },

  staging: {
    client: "postgresql",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truckstop`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
  },

  production: {
    client: "postgresql",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truckstop`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
    },
  },
};
