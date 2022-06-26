//9. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. С помощью цикла for выведите каждый элемент массива без повторений -> [1, 2, 3, 4, 5]

let arr = [1, 2, 3, 4, 4, 3, 4, 5].sort();
let rez = [];
for (let i = 0; i < arr.length; i++) {
    if (!rez.includes(arr[i])) rez.push(arr[i])
}
console.log(rez);
