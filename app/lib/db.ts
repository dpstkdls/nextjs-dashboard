// const { Pool } = require("pg");
import { Client } from "pg";

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "postgres",
  port: 5432,
});
client.connect();

export default client;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   ssl: false,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

// module.exports = {
//   query: (text: string, params?: Array<string>) => pool.query(text, params),
// };
