const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();
const pool = new Pool({
  user: "postgres",
  host: "postgres",
  port: 5432,
  database: "postgres",
  password: "postgres"
});

module.exports = pool;