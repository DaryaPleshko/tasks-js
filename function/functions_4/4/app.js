// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке. 

const checkArray = (array) => {
    let string = 0;
    for (let el of array) (isNaN(el)) ? string += 1 : null;
    return (string === 0) ? true : false;
}

const findTheMaxAndMinValues = (array) => {
    if (checkArray(array)) {
        let maxNumber;
        let minNumber;
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                maxNumber = array[i];
                minNumber = array[i];
                continue;
            }
            if (array[i] > maxNumber) maxNumber = array[i];
            else if (array[i] < minNumber) minNumber = array[i];
        }
        return { maxNumber, minNumber };
    } else return `error`;
}

console.log(findTheMaxAndMinValues([34, 757, 42, 32, 677]));