//На входе массив в виде JSON. Необходимо спарсить JSON. Далее проверить является ли это массив (тип данных объект). Также необходимо проверить,
// что все элементы массива числа. Если это числа, то отфильтровать и вывести только четные элементы. В противном случае исключение

const dataParse = JSON.parse('[1, 2, 3]');
const checkOfArray = (array) => {
    if (typeof array === 'object') return true;
    else throw new Error('not a object');
}
const checkOfNum = (array) => {
    let countError = 0;
    for (let key of array) {
        (!isNaN(key)) ? countError += 1 : null;
    }
    if (countError == 0) return true;
    else throw new Error('it is a string');
}
const checkOfNumInArray = (array) => {
    let newArray = [];
    const boolOfCheckOfNum = checkOfNum(array);
    const boolOfArray = checkOfArray(array);
    if (boolOfArray && b) {
        for (let el of array) {
            (el % 2 == 0) ? newArray.push(el) : null;
        }
        return newArray;
    }
}
console.log(checkOfNumInArray(dataParse));
