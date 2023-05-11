const { pool } = require('../db');

const getAllEnvironmentDB = async () => {
    const client = await pool.connect();

    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;

    if (!result.length) throw new Error('Array is empty');
    return result;
}

const createEnvironmentDB = async (label, category, priority) => {
    const client = await pool.connect();

    const sql = `INSERT INTO environment ( label, category, priority ) 
    VALUES ($1, $2, $3)`;
    const result = (await client.query(sql, [label, category, priority])).rows;

    return result;
}

module.exports = { getAllEnvironmentDB, createEnvironmentDB }