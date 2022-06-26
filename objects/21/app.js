//Есть массив из чисел. На основе этого массива сформировать объект, где ключ – число нашего массива, а значение должно быть true / false. True если число четное, в противном случае нечетное 

const arr = [1, 3, 4, 6, 5];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) obj[arr[i]] = true;
    else obj[arr[i]] = false;
}
console.log(obj);