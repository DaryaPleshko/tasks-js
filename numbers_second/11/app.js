const a = +prompt("Введите число");
const b = +prompt("Введите число");

if (!isNaN(a && b)) {
    console.log(`Среднее арифметическое - ${(a + b) / 2}`);
    console.log(`Среднее геометрическое - ${Math.sqrt(a * b)}`);
    console.log(`Среднее гармоническое - ${(2 * a * b) / (a + b)}`);
    console.log(`Среднее квадратичное - ${Math.sqrt((a ** 2 + b ** 2) / 2)}`);
} else console.log("Ошибка");