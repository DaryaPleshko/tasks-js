//Пользователь вводит число. Это число – количество эл-ов массива. Напишите функцию заполнения массива. Из этой функции вызовите функцию, 
//которая будет принимать массив чисел и находить минимальное и максимальное числа соответственно. Добавить функцию проверки

const a = prompt(``);

const arrayAll = [].sort();
const arrMax = [];
const arrMin = [];


const pushArr = (array) => {
    for (let i = 0; i < a; i++) {
        arrayAll.push(prompt(``));
    }
    return arrayAll;
}

function checkNum(param) {
    let counter = 0;
    param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
    return counter === 0 ? pushArr(param) : `Error`;
}
function arrayMaxMin(min, max) {
    return min - max;
}

let max = arrMax.push(arrayAll[arrayAll.length - 1]);
let min = arrMin.push(arrayAll[0]);

console.log(min, max);