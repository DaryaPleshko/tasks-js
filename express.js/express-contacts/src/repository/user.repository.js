const { pool } = require('../db');

const getAllDataDb = async () => {
    const client = await pool.connect();

    const sql = `
SELECT users.name, users.surname, users_info.birth  
FROM users_info
JOIN users
ON users.info_id = users_info.id
`;
    const result = (await client.query(sql)).rows;
    return result;
}

const getDataByIdDb = async (id) => {
    const client = await pool.connect();

    const sql = `
SELECT users_info.id, users.name, users.surname, users_info.birth, users_info.city
FROM users_info
JOIN users
ON users.info_id = users_info.id
WHERE users_info.id = $1;
`;
    const result = (await client.query(sql, [id])).rows;
    return result;
}

module.exports = { getAllDataDb, getDataByIdDb }