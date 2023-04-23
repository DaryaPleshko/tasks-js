//На входе массив. Необходимо создать функцию проверки на то что в массиве только строки. Если результат проверки –
// true, то передать массив в новую функцию, возвращающую строку из всех элементов массива

const arr = ['asd', 'ads', 'dsf', 'mii'];
const arrCheck = (array) => {
    let errorNumb = 0;
    for (let key of array) !isNaN(key) ? (errorNumb += 1) : null;
    if (errorNumb > 0) return false;
    return true;
};
const arrStr = (array) => {
    let value = arrCheck(array);
    if (value === true) return array.join('');
};
console.log(arrStr(arr));