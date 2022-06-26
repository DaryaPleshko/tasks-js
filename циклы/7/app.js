//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
let arr = [1, 2, 3, 4, 5];
let rez = 0;

for (let i = 0; i < arr.length; i++) {
    rez += arr[i];
}
console.log(rez);