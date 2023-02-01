// Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

const doArray = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++)arr.push(+prompt(''));
    return arr;
}

const doSum = (array) => {
    try {
        doArray()
        let newArray = 0;
        for (let i = 0; i < array.length; i++) if (array[i] > 0) newArray += array[i];
        return newArray;
    } catch (error) {
        return error.message;
    }
}
let arr = doArray(6);
console.log(doSum(arr));