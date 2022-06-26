let str = prompt("Введите текст");
let arr = str.split(" ");
let rez = "";

for (let i = 0; i < arr.length; i++) {
    rez += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
}
console.log(rez);