// На входе массив. Необходимо создать функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function checkArr(paramArr) {
    let newArray = [];
    for (let el of paramArr) {
        (el % 2 === 0) ? newArray.push(el ** 2) : null;
    }
    return newArray;
}
let rez = checkArr(arr);
console.log(rez);