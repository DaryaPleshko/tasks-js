//На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const checkArray = (array, n) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) (array[i] > n) ? newArray.push(array[i]) : null;
    return newArray;
}

console.log(checkArray([15, 54, 36, 653, 65, 25, 8,], 45));