let array = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
]

const getData = () => {
    return array;
}

const getDataById = (id) => {
    return array.filter(el => el.id == id);
}

const createData = (name, age) => {
    array.push({ id: array.length + 1, name, age });
    return array;
}

const updateData = (id, name, age) => {
    const index = array.findIndex(el => el.id == id);
    array[index] = { id, name, age };
    return array;
}

const deleteData = (id) => {
    return array.filter(el => el.id != id);
}

module.exports = { getData, getDataById, createData, updateData, deleteData }




















// const getData = () => {
//     return array;
// }

// const createData = (name, age) => {
//     array.push({ name, age });
//     return array;
// }

// const updateData = (id, name, age) => {
//     const filtered = array.filter(el => el.id != id);
//     if (filtered.length !== array.length) {
//         const obj = {
//             id: id,
//             name: name,
//             age: age
//         };
//         filtered.push(obj);
//         return filtered;
//     } else {
//         return `id is empty`;
//     }
// }

// function deleteData(id) {
//     const filtered = array.filter(el => el.id != id);
//     return filtered;
// }

// module.exports = { getData, createData, updateData, deleteData };