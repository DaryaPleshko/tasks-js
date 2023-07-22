// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

const step = (valueA, valueB) => {
    try {
        if (typeof valueA != 'number' || typeof valueB != 'number') throw new Error(`Ошибка типов данных`);
        return valueA ** valueB;
    } catch (error) {
        return error.message;
    }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

const multy = (valueA, valueB) => {
    try {
        if (typeof valueA != 'number' || typeof valueB != 'number') throw new Error(`Ошибка типов данных`);
        return valueA * valueB;
    } catch (error) {
        return error.message;
    }
}

// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

const sumArr = (array) => {
    try {
        if (!Array.isArray(array)) throw new Error('не массив');
        if (array.some(el => typeof el !== 'number')) throw new Error('Ошибка типов данных');
        return array.reduce((sum, el) => sum + el, 0);
    } catch (error) {
        return error.message;
    }
}

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

const filterArray = (array) => {
    try {
        if (!Array.isArray(array)) throw new Error('не массив');
        return array.filter(elem => elem.count > 10 && elem.producer === 'Германия');
    } catch (error) {
        return error.message;
    }
}

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

const createArray = (array) => {
    try {
        if (array.some(elem => typeof elem !== 'string')) throw new Error('ошибка типов данных')
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!newArray.includes(array[i])) newArray.push(array[i]);
        }
        return newArray;
    } catch (error) {
        return error.message;
    }
}

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.

const chackKeyValuePairs = (obj) => {
    try {
        let count = 0;
        for (const key in obj) if (!isNaN(key)) count++;
        return count;
    } catch (error) {
        return error.message;
    }
};

//     7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
//     Написать тест для функции

const doubleValue = (obj) => {
    try {
        for (const key in obj) if (!isNaN(obj[key])) obj[key] = obj[key] * 2;
        return obj;
    } catch (error) {
        return error.message;
    }
};

//     8. На входе статичный объект. Необходимо сформировать массив из всх четных
//     значений объекта.
//     Написать тест для функции

const evenValue = (obj) => {
    try {
        let arr = [];
        for (const key in obj) {
            if (isNaN(obj[key])) throw new Error('ошибка типов данных');
            if (obj[key] % 2 == 0) arr.push(obj[key]);
        }
        return arr;
    } catch (error) {
        return error.message;
    }
};

//     9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
//     разбить данный одномерный массив на маленькие массивы в зависимости от
//     того, какого число ввел пользователь. Добавить необходимые проверки.
//     1 -> [[1], [2], [3], [4], [5], [6]]
//     2 -> [[1, 2], [3, 4], [5, 6]]
//     3 -> [[1, 2, 3], [4, 5, 6]]
//     4 -> [[1, 2, 3, 4], [5, 6]
//     5 -> [[1, 2, 3, 4, 5], [6]]
//     6 -> [[1, 2, 3, 4, 5, 6]]
//     Написать тест для функции
// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

module.exports = { step, multy, sumArr, filterArray, createArray, chackKeyValuePairs, doubleValue, evenValue }