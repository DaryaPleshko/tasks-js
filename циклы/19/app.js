// Напишите программу, которая считывает одну строку текста и выводит 10 строк, пронумерованных от 0 до 9, каждая с указанной строкой текста.

const outputString = (str) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}) ${str}`);
    }
}

console.log(outputString('Hi, my name is Dasha'));
















// const text = 'Hello';
// let i = 0;
// for (let i = 0; i < 10; i++) {
//     console.log(`${i} ${text}`);
// }