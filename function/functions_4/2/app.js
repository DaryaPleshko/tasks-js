//На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const checkArray = (array) => {
    let number = 0;
    for (let el of array) (!isNaN(el)) ? number += 1 : null;
    return (number === 0) ? true : false;
}

const doArray = (n) => {
    let array = [];
    for (let i = 0; i < n; i++) array.push(prompt(``));
    if (checkArray(array)) {
        let longWord;
        for (let i = 0; i < array.length; i++) {
            if (i === 0) longWord = array[i];
            if (array[i].length > longWord.length) longWord = array[i];
        }
        return longWord;
    } else return `error`;
}

console.log(doArray(4));