// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – 
//true, то передать массив в новую функцию, возвращающую максимальное значение

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function chekArr(paramArr) {
    let str = 0;
    for (let el of paramArr) (isNaN(el)) ? str += 1 : null;
    return (str === 0) ? true : false;
}
function maxofArr(paramArr) {
    let arrayFirstFunk = chekArr(paramArr);
    if (arrayFirstFunk) {
        let maxChislo;
        for (let i = 0; i < paramArr.length; i++) {
            if (i === 0) maxChislo = paramArr[i];
            if (i != 0 && maxChislo < paramArr[i]) maxChislo = paramArr[i];
        }
        return maxChislo;
    } else return `Error`;
}
let rez = maxofArr(arr);
console.log(rez);