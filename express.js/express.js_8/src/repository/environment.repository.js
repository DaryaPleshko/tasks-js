const { pool } = require('../db');

const getAllEnvironmentDB = async () => {
    const client = await pool.connect();

    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;

    if (!result.length) throw new Error('Array is empty');
    return result;
};

const getEnvironmentByIdDB = async (id) => {
    const client = await pool.connect();

    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;

    if (!result.length) throw new Error(`id is empty`);
    return result;
}

const createEnvironmentDB = async (label, category, priority) => {
    const client = await pool.connect();

    const sql = `INSERT INTO environment ( label, category, priority ) 
    VALUES ($1, $2, $3) RETURNING *`;
    const result = (await client.query(sql, [label, category, priority])).rows;

    return result;
};

const updateEnvironmentDB = async (id, label, category, priority) => {
    const connect = await pool.connect();

    const sql = `UPDATE environment SET label = $1, category = $2, priority = $3 WHERE id = $4 RETURNING *`;
    const result = (await connect.query(sql, [label, category, priority, id])).rows;

    if (!result.length) throw new Error('incorrect value');
    return result;
}

const deleteEnvironmentDB = async (id) => {
    const connect = await pool.connect();

    const sql = `DELETE FROM environment WHERE id = $1 RETURNING *`;
    const result = (await connect.query(sql, [id])).rows;

    if(!result.length) throw new Error('incorrect value');
    return result;
}


module.exports = { getAllEnvironmentDB, getEnvironmentByIdDB, createEnvironmentDB, updateEnvironmentDB, deleteEnvironmentDB }