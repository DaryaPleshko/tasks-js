// На входе массив. Необходимо создать функцию, возвращающую количество элементов массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function checkArr(paramArr) {
    let elOfArr = 0;
    for (let el of paramArr) {
        elOfArr += 1;
    }
    return elOfArr;
}
let rez = checkArr(arr);
console.log(rez);
