const a = prompt("Введите дату");
let date = a.split("-");
let dateA = date.reverse().join("/");
console.log(dateA);