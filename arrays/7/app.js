//На входе 5 значений. Из данных элементов составить массив. Далее необходимо пройтись по каждому из элементов
//  массива и если это число, то создать занести его в новый массив. Если длина массива равна 0,
//  то вывести ‘Массив пуст’. Использовать filter

const array = [1, 'lolo', 2, 'kiko', 3];

const checkArrayLength = (array) => {
    if (!array.length) throw new Error('Array is empty');
    return true;
}

const checkOfNumber = (array) => {
    try {
        checkArrayLength(array);
        const filtered = array.filter(el => !isNaN(el));
        return filtered;
    } catch (error) {
        return error.message;
    }
}
console.log(checkOfNumber(array))
















// const arr = [1, 2, 3, 4, 'Hanna'];
// if (arr.length === 0) console.log('macciv pust');
// else {
//     let newArr = arr.filter(el => !isNaN(el));
//     console.log(newArr)
// }