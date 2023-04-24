const a = +prompt("Введите число");
const sqrtA = Math.sqrt(a);
Number.isInteger(sqrtA) ? console.log(sqrtA) : console.log(sqrtA.toFixed(2));