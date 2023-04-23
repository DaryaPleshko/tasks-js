//На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки –
// true, то передать массив в новую функцию, возвращающую произведение всех элементов массива

const arr = [1, 2, 3, 4, 5];

function chekArr(arrParam) {
    let countOfString = 0;
    for (let el of arrParam) (isNaN(el)) ? countOfString += 1 : null;
    if (countOfString === 0) return true;
    return false;
}
function mutElofArr(arrParam) {
    let boolRez = chekArr(arrParam);
    if (boolRez === true) {
        let mut = 1;
        for (let i = 0; i < arrParam.length; i++)  mut *= arrParam[i];
    } else return `error`;
}
let rez = mutElofArr(arr)
