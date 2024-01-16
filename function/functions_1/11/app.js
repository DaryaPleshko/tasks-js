// На входе массив. Необходимо создать функцию, возвращающую количество элементов массива

const checkArray = (array) => {
    if (!Array.isArray(array)) throw new Error('это не массив');
    return true;
}

const countValueArray = (array) => {
    try {
        checkArray(array);
        return array.length;
    } catch (error) {
        return ErrorEvent.message;
    }
}

console.log(countValueArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));












// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function checkArr(paramArr) {
//     let elOfArr = 0;
//     for (let el of paramArr) {
//         elOfArr += 1;
//     }
//     return elOfArr;
// }
// let rez = checkArr(arr);
// console.log(rez);
