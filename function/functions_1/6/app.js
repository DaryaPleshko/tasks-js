// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат
// проверки – true, то передать массив в новую функцию, возвращающую массив из только четных чисел

const checkArray = (array) => {
    const filtered = array.filter(el => isNaN(el));
    if (!filtered) throw new Error('');
    return true;
}
const chetArray = (array) => {
    try {
        checkArray(array);
        return array.filter(el => el % 2 === 0);
    } catch (error) {
        return error.message;
    }
}

console.log(chetArray([1, 2, 3, 4, 5, 6]));
















// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function checkChet(param) {
//     return param.filter(element => element % 2 === 0)
// }
// function checkNum(param) {
//     let counter = 0;
//     param.forEach(element => (isNaN(element)) ? counter += 1 : null);
//     return (counter === 0) ? checkChet(param) : 'error';
// }
// let out = checkNum(input)
// console.log(out)
