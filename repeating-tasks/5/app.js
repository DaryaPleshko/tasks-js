//У вас есть массив чисел. Необходимо проверить все ли элементы массива числа. Если да, то вывести только уникальный числа. В противном случае исключение. [1, 2, 3, 3, 1, 2, 5] -> [1, 2, 3, 5] 

const arr = [1, 2, 3, 3, 446, 65];
let checkOfNum = (array) => {
    let countError = 0;
    for (let i of array) {
        (!isNaN[i]) ? true : ++countError;
    }
    if (countError > 0) {
        throw new Error('вы ввели строку')
    } else {
        return true;
    }
}
let unicValuesOfArray = (arrayValues) => {
    try {
        const boolCheck = checkOfNum(array)
        if (boolCheck) {
            let currentEl = [];
            for (let i of arrayValues) {
                if (!currentEl.includes(i)) {
                    currentEl.push(i);
                }
            }
        }
    } catch (err) {
        return err;
    }
}
console.log(unicValuesOfArray(arr))

