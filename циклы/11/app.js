// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. С помощью цикла while выведите каждый элемент массива без повторений -> [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 4, 3, 4, 5].sort();
let i = 0,
    rez = [];
while (i < arr.length) {
    if (!rez.includes(arr[i])) rez.push(arr[i])
    i++
}
console.log(rez);

