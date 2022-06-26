const str = prompt("Введите текст");
const arr = str.split("_");
let rez = arr[0];

for (let i = 1; i < arr.length; i++) {
    rez += arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(rez);