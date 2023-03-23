const e = require('express');
const { arrObj } = require('./obj')

const task = () => {
    if (arrObj.length === 0) throw new Error('array is empty')
    return arrObj;
}

const taskById = (clientid) => {
    const objFilt = arrObj.filter((el) => el.id === clientid)
    if (objFilt.length === 0) throw new Error('not found')
    return objFilt;
}

const createTask = (obj) => {
    arrObj.push(obj)
    if (arrObj.length === 0) {
        throw new Error('not found')
    } else {
        console.log(arrObj)
        return obj
    }
}

const putMetod = (obj) => {
    const objFilt = arrObj.filter((key) => key.id === obj)
    arrObj.push(objFilt)
    if (arrObj.length === 0) {
        throw new Error('not found')
    } else {
        console.log(arrObj)
        return obj;
    }
}

module.exports = { task, taskById, createTask, putMetod }
