// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const doArray = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) array.push(prompt(`Добавьте значение в массив`));
    return array;
}

const checkArray = (number) => {
    try {
        if (doArray(number)) {
            let countStr = 0;
            for (let el of array) (isNaN(el)) ? countStr++ : null;
            if (countStr > 0) throw new Error(`В массиве есть строка`);
            return true;
        }
    } catch (error) {
        return error.message;
    }
}

const mainTask = (number) => {
    if (checkArray(number)) {
        let newArray = number.filter(el => el > 10 && el < 100);
        return newArray;
    }
}

let array = doArray(5);
console.log(mainTask(array));