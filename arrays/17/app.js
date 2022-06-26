//На входе есть пустой массив (он есть с самого начала). Первоначально мы вводим n – количество эл-ов массива. Далее вводим с клавиатуры сами значения и добавляем их в конец данного массива. Необходимо вывести 2 массива: в одном только четные числа, в другом нечетные. 
//Добавить проверки на ввод только целых чисел. Либо map, либо forEach

const a = +prompt(``);
let arr = [];
const chet = [].sort();
const nechet = [].sort();

for (let i = 0; i < a; i++) {
    const n = +prompt();
    Number.isInteger(n) ? arr.push(n) : null;
}
arr.forEach((el) => (el % 2 === 0 ? chet.push(el) : nechet.push(el)));

console.log(chet);
console.log(nechet);