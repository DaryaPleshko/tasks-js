const { getAllUserDB, getUserByIdDB, createUserDB } = require('../repository/user.repository');

const getAllUser = async () => {
    const data = await getAllUserDB();
    if (!data.length) throw new Error('Array is empty');
    return data;
}

const getUserById = async (id) => {
    const data = await getUserByIdDB(id);
    if (!data.length) throw new Error('Array is empty');
    return data;
}

const createUser = async (name, surname, email, pwd) => {
    const data = await getUserByIdDB(name, surname, email, pwd);
    if (!data.length) throw new Error(`The value didn't come from the client`);
    return data;
}

module.exports = { getAllUser, getUserById, createUser }