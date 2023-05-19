const { getAllDataDb } = require('../repository/user.repository');

const getAllData = async () => {
    const data = await getAllDataDb();
    if (!data.length) throw new Error('Array is empty');
    return data;
}

module.exports = { getAllData }