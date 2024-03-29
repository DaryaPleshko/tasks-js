//На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки –
// true, то передать массив в новую функцию, возвращающую сумму всех элементов массива 

const checkArray = (array) => {
    const filtered = array.filter(el => isNaN(el));
    if (!filtered) throw new Error('в массиве есть строки');
    return true;
}

const sumArray = (array) => {
    try {
        checkArray(array);
        return array.reduce((sum, current) => sum + current)
    } catch (error) {
        return error.message;
    }
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));














// const arr = [1, 2, 3, 4, 5];
// function chekArr(arrParam) {
//     let strError = 0;
//     for (let el of arrParam) (isNaN(el)) ? strError += 1 : null;

//     if (strError > 0) return false;
//     return true;
// }

// function sumOfArray(arrParam) {
//     let str = chekArr(arrParam);
//     if (str === true) {
//         let sumArr = arrParam.reduce((sum, current) => sum + current)
//         return sumArr;
//     } else return 'error';
// }
// let sum = sumOfArray(arr);
// console.log(sum)