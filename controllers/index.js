const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  user: '',
  database: "reviews",
  password: '',
  port: 5432
});

pool.connect();

module.exports = pool;

