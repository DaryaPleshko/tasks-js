//Решить ряд Фибоначчи. Рузальтат массива запистаь в объект под ключ

let obj = {},
    value = prompt(''),
    arr = [0, 1];
if (!isNaN(value)) {
    value = +value;
    for (let i = 2; i < value; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
} else console.log(false);
obj.avg = arr;
console.log(obj);