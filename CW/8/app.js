// На вход подаются 2 числа. Необходимо найти максимальное и
// минимальное число. Если пользователь ввел не число, а строку -> ошибка ввода.

const valueA = prompt('Введите число');
const valueB = prompt('Введите число');
if (!isNaN(valueA, valueB)) console.log(`Минимальное число = ${Math.min(valueA, valueB)}.Максимальное число = ${Math.max(valueA, valueB)}.`);
else console.log('ошибка ввода');