//Пользователь вводит имя фамилию. Необходимо создать функцию
//возвращающую строку вида «Привет, {имя} {фамилия}»
const doUser = (name, surname) => `Привет, ${name} ${surname}`;
console.log(doUser(`Dasha`, `Pleshko`));

//Напишите функцию, которая принимает строку в маленьком регистре и
//возаращает строку, где каждое слово начинается с большого регистра
//hschool company -> Hschool Company 
const str = 'hschool company'.split(' ');

const doString = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++)   newStr += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
    return newStr;
}
console.log(doString(str));

//Напишите функцию, которая принимает статичный массив строк. Необходимо
//отфильтровать значения и оставить только те, где длина строк до 2 символов.
//[“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
const checkArray = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 3) newArray.push(array[i]);
    }
    return newArray;
}
console.log(checkArray([`by`, `belarus`, `de`, `ru`, `germany`]));

//На входе массив. Необходимо создать функцию проверки на то что в массиве
//только числа. Функция возвращает true, если в массиве только числа и false в
//противном случае
const checkArr = (array) => {
    let str = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) str += 1;
    }
    return (str === 0) ? true : false;
}

console.log(checkArr([1, 2, 3, 2, `hanna`, 43]));

//На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
//только числа. Вторая для получения суммы всех элементов массива. Если
//результат функции проверки – true, то вызывать новую функцию, возвращающую
//сумму всех элементов массива
const check = (array) => {
    let str = 0;
    for (let el of array) {
        (isNaN(el)) ? str++ : null;
    }
    return (str == 0) ? true : false;
}
const doArray__ = (array) => {
    if (check(array)) {
        let summa = array.reduce((summa, el) => el + summa, 0);
        return summa;
    } return 'error';
}
console.log(doArray__([1, 2, 2, 4, `sgvg`, 6, 75]));

//На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами
const checkArray_2 = (array) => {
    let str = 0;
    for (let el of array) (isNaN(el)) ? str += 1 : null;
    return (str === 0) ? true : false;
}

const doArray_2 = (array) => {
    if (checkArray_2(array)) {
        let newArray_2 = [];
        for (let i = 0; i < array.length; i++) newArray_2.push(array[i] * 2);
        return newArray_2;
    } else return `Error`;
}

console.log(doArray_2([2, 24, 54, 3, 2, 4]))

//На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива
const checkArray_3 = (array) => {
    let str = 0;
    for (let el of array) (isNaN(el)) ? str += 1 : null;
    return (str === 0) ? true : false;
}

const doArray_3 = (array) => {
    if (checkArray_3(array)) {
        let newArray_3 = [];
        for (let i = 0; i < array.length; i++)  if (array[i] % 2 === 0) newArray_3.push(array[i])
        return newArray_3;
    } else return `Error`;
}

console.log(doArray_3([2, 23, 54, 3, 2, 4]));

//На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
const doFactorial = (num) => {
    return (num != 1) ? num * doFactorial(num - 1) : 1;
}
console.log(doFactorial(8));

//На входе строка. Необходимо создать функцию, возвращающую true, если это
//слово анаграмма и false в противном случае
const checkStr = (str_1, str_2) => {
    return (str_1.length === str_2.length) ? true : false;
}
const checkOfAnagramma = (str_1, str_2) => {
    if (checkStr(str_1, str_2)) {
        let anogramma = 0;
        for (let i = 0; i < str_1.length; i++) {
            (str_1.includes(str_2[i])) ? anogramma += 1 : null;
        }
        return (anogramma === str_2.length) ? true : false;
    }
}
console.log(checkOfAnagramma(`конуc`, `сукно`));

//На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива
const checkArrayOfStr = (array) => {
    let str = 0;
    for (let el of array) (isNaN(el)) ? str += 1 : null;
    return (str === 0) ? true : false;
}
const findMax = (array) => {
    if (checkArrayOfStr(array)) {
        let bigNumber;
        for (let i = 0; i < array.length; i++) {
            if (i === 0) bigNumber = array[i];
            if (array[i] > bigNumber) bigNumber = array[i];
        }
        return bigNumber;
    } else return `error`;
}
console.log(findMax([1, 35, 43, 5, 68, 98]));
