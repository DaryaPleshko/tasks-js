// На входе есть массив [1, 2, 3, 4, 5], мы НЕ вводим с клавиатуры его значений, он есть по условию задания.
//  Мы вводим только одно число клавиатуры. Необходимо разбить данный одномерный массив на маленькие массивы 
// в зависимости от того, какого число ввел пользователь (смотреть тесты, тк возможно криво
// объяснила условие). Добавить проверки на ввод числа (не должно быть больше длины массива,
// 0, пустая строка, строка).
//  В данном задании использовать push для добавления нового элемента в массив 

const doArrays = (array, count) => {
    let resalt = [],
        interimRes = [];
    for (let i = 0; i < array.length; i++) {
        interimRes.push(array[i]);
        if (interimRes.length == count) {
            resalt.push(interimRes)
            interimRes = [];
        }
    }
    return resalt;
}

console.log(doArrays([1, 2, 3, 4, 5], 2));





// const arr = [1, 2, 3, 4, 5, 6];
// const value = 2;
// let res = [];
// let way = [];
// for (let i = 0; i < arr.length; i++) {
//     way.push(arr[i])
//     if (way.length === value) {
//         res.push(way);
//         way = [];
//     }
// }
// console.log(res);