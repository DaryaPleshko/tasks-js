const { pool } = require('../db');

const getAllUserDB = async () => {
    const client = await pool.connect();

    const sql = `SELECT * FROM users`;
    const gettingSql = (await client.query(sql)).rows;

    return gettingSql;
}

const getUserByIdDB = async (id) => {
    const client = await pool.connect();

    const sql = `SELECT * FROM users WHERE id = $1`
    const gettingSql = (await client.query(sql, [id])).rows;

    return gettingSql;
}

const createUserDB = async (name, surname, email, pwd) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const sql = `
        INSERT INTO users(name, surname, email, pwd)
        VALUES ($1, $2, $3, $4) RETURNING *`;
        const gettingSql = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query('COMMIT');

        return gettingSql;
    } catch (error) {
        await client.query('ROLLBACK');

        throw new Error(error.message);
    }
}

module.exports = { getAllUserDB, getUserByIdDB, createUserDB }