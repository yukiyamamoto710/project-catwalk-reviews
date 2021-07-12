const { Pool } = require('pg');

const pool = new Pool({
  host: '54.153.2.154',
  user: 'postgres',
  database: 'reviews',
  password: 'root',
  port: 5432,
});

pool.connect();

module.exports = pool;
