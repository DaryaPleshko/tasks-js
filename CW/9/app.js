// На вход подаются 2 строки. Необходимо проверить являются ли эти строки
// анаграммами, причем регистр букв не имеет значения. Учитываются лишь
// символы. Пробелы или знаки препинания в расчет не берутся. Анаграмма - это
// некоторая трансформация исходного слова в результате которой получается
// некоторое другое слово. Т.е. было "СУКНО", стало "КОНУС", т.е. набор букв
// остается неизменным. Добавить проверки на ввод (представляем, что юзер,
// которому вы пишите код тупой и может вводить как пустую строку, так и пробел,
// запятые и все данные, неподходящие условию). 

let valueA = prompt(`Введите значение`).trim().toLowerCase().split("").sort().join("");
let valueB = prompt(`Введите значение`).trim().toLowerCase().split("").sort().join("");
let rez;
rez = valueA === valueB ? true : false;
console.log(rez);