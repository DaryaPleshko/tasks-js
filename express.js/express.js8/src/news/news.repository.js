const { pool } = require("../db");

class NewsDB {
    createdNewsDB = async (label, article, date) => {
        const connect = await pool.connect();
        const sqlDate = `INSERT into date (date)
        VALUES ($1) RETURNING date.*`;
        const objDate = (await connect.query(sqlDate, [date])).rows[0];

        const sqlNews = `INSERT into news (label, article, date_id)
        VALUES ($1, $2, $3)  RETURNING news.*`
        const objNews = (await connect.query(sqlNews, [label, article, objDate.id])).rows;
        return objNews;
    }

    getAllNewDB = async () => {
        const connect = await pool.connect();
        const sqlDate = `SELECT news.id, news.label, news.article, date.date from news join date on news.date_id = date.id`;
        const sqlNews = (await connect.query(sqlDate)).rows;
        return sqlNews;
    }

    getNewsByIdDB = async (id) => {
        const connect = await pool.connect();
        const sqlDate = `SELECT news.id, news.label, news.article, date.date from news join date on news.date_id = date.id
        WHERE news.id = $1`;
        const sqlNews = (await connect.query(sqlDate, [id])).rows;
        return sqlNews;
    }

    putNewsByIdDB = async (id, label, article, date) => {
        const connect = await pool.connect();
        const sqlDate = `UPDATE date SET date = $1 WHERE id = $2 RETURNING date.*`;
        const objDate = (await connect.query(sqlDate, [date, id])).rows[0];

        const sqlNews = `UPDATE news SET label = $1, article = $2 
        WHERE id = $3 RETURNING news.*`;
        const objNews = (await connect.query(sqlNews, [label, article, id])).rows;

        return objNews;
    }

    deleteNewsByIdDB = async (id) => {
        const connect = await pool.connect();

        const sqlBase = `SELECT * from news where id = $1`;
        const objBase = (await connect.query(sqlBase, [id])).rows;
        console.log(objBase);

        const sql = `DELETE FROM news
        WHERE id = $1 RETURNING news.*`;
        const obj = (await connect.query(sql, [id])).rows;

        return objBase;
    }
}

module.exports = NewsDB;