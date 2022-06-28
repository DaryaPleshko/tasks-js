// У вас есть массив из строк. Необходимо проверить является ли каждый элемент массива строкой. Если все элементы строки => то вернуть строку из всех элементов массива. В противном случае исключение

const arr = ['hello', 'Hanna', 'and', 'dyadya Stas'];
const checkOfArray = (array) => {
    sumOfStrInArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) sumOfStrInArray += 1;
    }
    if (sumOfStrInArray === 0) return true;
    else throw new Error('вы ввели число');
}
const mainFunction = (array) => {
    try {
        const boolOfCheckArray = checkOfArray(array);
        if (boolOfCheckArray) return array.join('');
    } catch (err) {
        return err;
    }
}
console.log(mainFunction(arr))