/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import dotenv from "dotenv";

dotenv.config();

const development = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: "./src/database/migrations",
  },
};

export { development };
