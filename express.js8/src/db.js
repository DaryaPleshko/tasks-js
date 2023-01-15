const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'list_news',
    password: '^D3I8FEfcnpc',
    port: '5432',
});

module.exports = { pool }