const { pool } = require('../db');

const getAllDataDb = async () => {
  const client = await pool.connect();

  const sql = `
  SELECT users.id, users.name, users.surname, users_info.birth, users_info.city
  FROM users_info
  JOIN users
  ON users.info_id = users_info.id`;
  const result = (await client.query(sql)).rows;
  return result;
};

const getDataByIdDb = async id => {
  const client = await pool.connect();

  const sql = `
  SELECT users.id, users.name, users.surname, users_info.birth, users_info.city
  FROM users_info
  JOIN users
  ON users.info_id = users_info.id
  WHERE users_info.id = $1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
};

const createDataDb = async (name, surname, birth, city, age) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sqlInfo = `
    INSERT INTO users_info(birth, city, age)
    VALUES ($1, $2, $3) RETURNING *`;
    const gettingSqlInfo = (await client.query(sqlInfo, [birth, city, age])).rows;

    const sqlUsers = `
    INSERT INTO users(name, surname, info_id)
    VALUES ($1, $2, $3) RETURNING *`;
    const gettingSqlUsers = (await client.query(sqlUsers, [name, surname, gettingSqlInfo[0].id])).rows;

    await client.query('COMMIT');

    return [{ ...gettingSqlInfo[0], ...gettingSqlUsers[0] }];
  } catch (error) {
    await client.query('ROLLBACK');

    throw new Error(error.message);
  }
};

const updateDataDb = async (id, name, surname, birth, city, age) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    console.log(id, name, surname, birth, city, age)
    const sqlInfo = `
    UPDATE users_info 
    SET birth = $1, city = $2, age = $3 
    WHERE id = $4 RETURNING *`;
    const gettingSqlInfo = (await client.query(sqlInfo, [birth, city, age, id])).rows;

    const sqlUsers = `
    UPDATE users
    SET name = $1, surname = $2
    WHERE info_id = $3 RETURNING *`;
    const gettingSqlUsers = (await client.query(sqlUsers, [name, surname, gettingSqlInfo[0].id])).rows;

    await client.query('COMMIT');

    return [{ ...gettingSqlInfo[0], ...gettingSqlUsers[0] }];
  } catch (error) {
    await client.query('ROLLBACK');
    throw new Error(error.message);
  }
};

const patchDataDb = async (id, name, surname, birth, city, age) => {

}

const deleteDataDb = async (id) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sqlInfo = `
      DELETE FROM users_info
      WHERE id = $1 RETURNING * `;
    const gettingSqlInfo = await client.query(sqlInfo, [id]);

    const sqlUsers = `
      DELETE FROM users
      WHERE info_id = $1 RETURNING * `;
    const gettingSql = await client.query(sqlUsers, [id]);

    await client.query('COMMIT');

    return [{ ...gettingSqlInfo[0], ...gettingSql[0] }];
  } catch (error) {
    await client.query('ROLLBACK');
    throw new Error(error.message);
  }
};

module.exports = { getAllDataDb, getDataByIdDb, createDataDb, updateDataDb, patchDataDb, deleteDataDb };
