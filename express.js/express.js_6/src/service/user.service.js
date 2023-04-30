const fs = require('fs');
const path = './storage/storage.json';

const getAllUsers = () => {
    const data = JSON.parse(fs.readFileSync(path));
    return data;
}

const getUserById = (id) => {
    const data = JSON.parse(fs.readFileSync(path));
    const filtered = data.filter(el => el.id == id);
    if (!filtered.length) throw new Error(`id is empty`);
    return filtered;
}

const createUser = (name, surname, email, pwd) => {
    const data = JSON.parse(fs.readFileSync(path));
    data.push({ id: data.length + 1, name, surname, email, pwd });
    fs.writeFileSync(path, JSON.stringify(data));
    return data;
}

const updateUser = (id, name, surname, email, pwd) => {
    const data = JSON.parse(fs.readFileSync(path));
    const filtered = data.filter(el => el.id != id);
    if (filtered.length == data.length) throw new Error('id is empty');
    filtered.push({ id, name, surname, email, pwd });                       
    return filtered;
}

const deleteUser = (id) => {
    const data = JSON.parse(fs.readFileSync(path));
    const filtered = data.filter(el => el.id != id);
    if (filtered.length == data.length) throw new Error(`id is empty`);
    return filtered;
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }