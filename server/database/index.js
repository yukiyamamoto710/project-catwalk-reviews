const { Pool } = require('pg');

const pool = new Pool({
  host: '13.52.75.241',
  user: 'postgres',
  database: 'reviews',
  password: 'root',
  port: 5432,
});

pool.connect();

module.exports = pool;
