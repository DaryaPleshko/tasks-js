const { data } = require("../storage/data");

const getDataById = (id) => {
    const user = data.filter((key) => key.id === +id);
    if (!user) throw new Error("Not found");
    return user;
}

const createDate = (obj) => {
    data.push(obj);
    if (!data.length) throw new Error("Array is empty");
    return data;
}

const updateValue = (id, user) => {
    const valFilter = data.filter((key) => key.id !== +id);
    valFilter.push(user)
    return valFilter;
}

const deleteGetById = (id, user) => {
    const valFilter = data.filter((key) => key.id !== +id);
    valFilter.push(user)
    return valFilter;
}

updateValue(1, { name: 2 })
module.exports = { getDataById, createDate, updateValue, deleteGetById };