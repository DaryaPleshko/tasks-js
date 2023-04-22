const { pool } = require("../db");

const createdEnvironmentDB = async (environment) => {
    const client = await pool.connect();
    const sql = `INSERT into environment (label,category,priority)
    VALUES($1, $2, $3) RETURNING environment.*`;
    const arrOfVal = (await client.query(sql, [environment.label, environment.category, environment.priority])).rows;
    return arrOfVal;
}

const getAllEnvironmentDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`;
    const arrOfVal = (await client.query(sql)).rows;
    console.log(arrOfVal)
    return arrOfVal;
}

const getEnvironmentByIdDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const arrOfVal = (await client.query(sql, [id])).rows;
    if (arrOfVal.length === 0) throw new Error('Not Found');
    return arrOfVal;
}

const putEnvironmentDB = async (id, fromClient) => {
    const client = await pool.connect();
    const sql = `UPDATE environment SET label = $1, category = $2, priority = $3 
    WHERE id = $4 RETURNING environment.*`;
    const arrOfVal = (await client.query(sql, [fromClient.label, fromClient.category, fromClient.priority, id])).rows;
    if (arrOfVal.length === 0) throw new Error('Not Found');
    return arrOfVal;
}

const deleteEnvironmentDB = async (id) => {
    const client = await pool.connect();
    const sql = `DELETE FROM environment
    WHERE id = $1 RETURNING environment.*`;
    const arrOfVal = (await client.query(sql, [id])).rows;
    return arrOfVal;
}

module.exports = { createdEnvironmentDB, getAllEnvironmentDB, getEnvironmentByIdDB, putEnvironmentDB, deleteEnvironmentDB }