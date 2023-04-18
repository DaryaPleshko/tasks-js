let array = [{ id: 1, name: "Цюрих", population: 378884 },
{ id: 2, name: "Женева", population: 188634 },
{ id: 3, name: "Базель", population: 164937 }];

const getEnvironment = () => {
    return array;
}

const getEnvironmentById = (id) => {
    const filtered = array.filter(el => el.id == id);
    return filtered;
}

const createValue = (obj) => {
    array.push(obj);
    return array;
}

const putOfData = (id, newValue) => {
    const filterId = array.filter(key => key.id === id);
    filterId.push({ ...id, ...newValue });
    return filterId;
}

module.exports = { getEnvironment, getEnvironmentById, createValue, putOfData };