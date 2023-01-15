const a = prompt("Введите дату");
const date = a.split("-").reverse().join("/");
console.log(date);