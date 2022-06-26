//[1, 2, 3, 4, 5]. Выведите каждый элемент массива  3 любыми циклами
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     console.log(i);
// }