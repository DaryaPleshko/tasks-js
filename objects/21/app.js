//Есть массив из чисел. На основе этого массива сформировать объект, где ключ 
// – число нашего массива, а значение должно быть true / false. True если число четное, в противном случае нечетное 

const createObject = (array) => {
    const obj = {};
    for (let i = 0; i <= array.length; i++) {
        (array[i] % 2 === 0) ? obj[array[i]] = true : obj[array[i]] = false;
    }
}
console.log(createObject([1, 2, 3, 4, 5, 6]));














// const arr = [1, 3, 4, 6, 5];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) obj[arr[i]] = true;
//     else obj[arr[i]] = false;
// }
// console.log(obj);