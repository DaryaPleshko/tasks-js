// Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

const doArray = (num) => {
    const array = []
    for (let i = 0; i <= num; i++) array.push(+prompt('Элемент массива'));
    return array;
}

const sumArray = (array) => {
    let summa = 0;
    for (let key of array) {
        if (array[key] > 0) summa += array[key];
    }
    return summa;
}

console.log(sumArray(doArray(+prompt('Длина маcсива'))));


// const doArray = (n) => {
//     let arr = [];
//     for (let i = 0; i < n; i++)arr.push(+prompt(''));
//     return arr;
// }

// const doSum = (array) => {
//     try {
//         doArray()
//         let newArray = 0;
//         for (let i = 0; i < array.length; i++) if (array[i] > 0) newArray += array[i];
//         return newArray;
//     } catch (error) {
//         return error.message;
//     }
// }
// let arr = doArray(6);
// console.log(doSum(arr));