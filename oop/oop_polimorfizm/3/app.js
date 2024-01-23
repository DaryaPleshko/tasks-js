// Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива

class NumberArray {
    sumArr() {
        const array = [];
        for (let i = 0; i < 5; i++) array.push(Math.floor(Math.random() * 10));
        return array;
    }
}
class ConsoleArray extends NumberArray{
    sumArr() {
        const getInfo = super.sumArr();
        const sumEl = getInfo.reduce((sum, current) => sum + current);
        return `array = [${getInfo}], summa = ${sumEl}`;
    }
}
const consoleArray = new ConsoleArray();
console.log(consoleArray.sumArr());










// class NumberArray {
//     sumArray() {
//         let array = [];
//         for (let i = 0; i < 5; i++) array.push(Math.floor(Math.random() * 99));
//         return array;
//     }
// }
// class ConsoleArray extends NumberArray {
//     sumArray() {
//         const getArray = super.sumArray();
//         let summa = 0;
//         for (let i = 0; i < getArray.length; i++) summa += getArray[i];
//         console.log(`Массив - [${getArray}]. Сумма элементов массива = ${summa}`);
//     }
// }

// const consoleArray = new ConsoleArray();
// consoleArray.sumArray();