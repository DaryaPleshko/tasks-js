const e = require('express');
const { arrobj } = require('./obj')

const task = () => {
    if (arrobj.length === 0) throw new Error('array is empty')
    return arrobj;
}

const taskById = (clientid) => {
    const objFilt = arrobj.filter((el) => el.id === clientid)
    if (objFilt.length === 0) throw new Error('not found')
    return objFilt;
}

const createTask = (obj) => {
    arrobj.push(obj)
    if (arrobj.length === 0) {
        throw new Error('not found')
    } else {
        console.log(arrobj)
        return obj
    }
}

const putMetod = (obj) => {
    const objFilt = arrobj.filter((key) => key.id === obj)
    arrobj.push(objFilt)
    if (arrobj.length === 0) {
        throw new Error('not found')
    } else {
        console.log(arrobj)
        return obj;
    }
}

module.exports = { task, taskById, createTask, putMetod }
