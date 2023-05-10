const { pool } = require('../db');

const getAllEnvironmentDB = async () => {
    const client = await pool.connect();

    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;

    return result;
}

module.exports = { getAllEnvironmentDB }