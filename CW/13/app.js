// Напишите программу, которая считывает три числа и подсчитывает сумму
// только положительных чисел.

const valueA = +prompt('Введите число');
const valueB = +prompt('Введите число');
const valueC = +prompt('Введите число');
let rez = 0;
if (valueA > 0) rez += valueA;
if (valueB > 0) rez += valueB;
if (valueC > 0) rez += valueC;
console.log(rez);