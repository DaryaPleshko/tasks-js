//Напишите функцию, которая будет принимать массив сохраненных чисел и находить минимальное и максимальное числа соответственно.

const arrA = [80, 20, 30, 40, 50];

function max(prev, next) {
    return Math.max(prev, next);
}

function min(prev, next) {
    return Math.min(prev, next);
}

console.log(`Максимальное - ${arrA.reduce(max)}`);
console.log(`Минимальное - ${arrA.reduce(min)}`);

// 2 способ
const arr = [80, 20, 30, 40, 50].sort();

function arrMaxMin(min, max) {
    return min - max;
}

console.log(`Maxsimum - ${arr[arr.length - 1]}`);
console.log(`Minimum - ${arr[0]}`);