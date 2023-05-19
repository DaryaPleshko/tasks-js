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

module.exports = { getAllDataDb }