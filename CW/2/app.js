//На вход подается строка. Необходимо проверить является ли эта строка
//словом палиндромом. Добавить проверки


const valueA = prompt('Введите строку').trim().toLowerCase();
const valueB = valueA.split("").reverse().join('');
(valueA === valueB) ? console.log('true') : console.log('false');
