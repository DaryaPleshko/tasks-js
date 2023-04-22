const NewsDB = require('./news.repository')

class News {
    createNews = async (label, article, date) => {
        const newsDb = new NewsDB();
        const data = await newsDb.createdNewsDB(label, article, date)
        return data;
    }

    getAllNews = async () => {
        const newsDB = new NewsDB();
        const data = await newsDB.getAllNewDB()
        return data;
    }

    getNewsById = async (id) => {
        const newsDB = new NewsDB();
        const data = await newsDB.getNewsByIdDB(id);
        return data;
    }

    updateNews = async (id, label, article, date) => {
        const newsDB = new NewsDB();
        const data = await newsDB.putNewsByIdDB(id, label, article, date);
        return data;
    }

    deleteNews = async (id) => {
        const newsDB = new NewsDB();
        const data = await newsDB.deleteNewsByIdDB(id);
        return data;
    }
}

module.exports = News;