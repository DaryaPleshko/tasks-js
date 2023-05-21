const { getAllDataDb, getDataByIdDb } = require('../repository/user.repository');

const getAllData = async () => {
    const data = await getAllDataDb();
    if (!data.length) throw new Error('Array is empty');
    return data;
}

const getDataById = async (id) => {
    const data = await getDataByIdDb(id);
    if (!data.length) throw new Error('Array with this id is empty');
    return data;
}

module.exports = { getAllData, getDataById }