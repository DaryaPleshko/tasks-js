const a = +prompt("Число 1");
const b = +prompt("Число 2");
const c = +prompt("Число 3");

let value = b * b - 4 * a * c;

if (value > 0) {
    console.log((-b - Math.sqrt(value)) / (2 * a));
    console.log((-b + Math.sqrt(value)) / (2 * a));
} else if (value === 0) {
    console.log(-b / (2 * a));
} else console.log("Нет корней");