// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values 

const findStr = (obj, str) => {
    try {
        return Object.values(obj).includes(str);
    } catch (error) {
        return error.message;
    }
}
console.log(findStr({
    id: 1,
    user: 'Darya Pleshko',
    str: 'tefst'
}, `test`));