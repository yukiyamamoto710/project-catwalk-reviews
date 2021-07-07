const { Pool } = require('pg');

const pool = new Pool({
  host: '52.53.244.105',
  user: 'postgres',
  database: 'reviews',
  password: 'root',
  port: 5432,
});

pool.connect();

module.exports = pool;
