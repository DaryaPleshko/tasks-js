const a = +prompt("Напишите положительное число");

const valueB = Math.floor((a % 1000) / 100);
const valueC = Math.floor((a % 100) / 10);
const valueD = Math.floor(a % 10);

if (a > 0) {
    console.log(`Сумма цифр - ${valueB + valueC + valueD}`);
    console.log(`Произведение цифр - ${valueB * valueC * valueD}`);
} else console.log("ОШИБКА - введите положительно число");
