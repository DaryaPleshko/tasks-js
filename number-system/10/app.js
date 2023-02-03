// Реализуйте функцию, которая принимает строку из 2 повторяющихся символов.
// Необходимо проверить, содержит ли строка одинаковое количество символов.
// Функция возвращает true, если строка содержит одинаковое количество
// символов и false в противном случае. Добавить проверки
// ooxx –> true
// xooxx –> false 

const checkLength = (str) => {
    if (str.length % 2 === 1) throw new Error(false);
    return true;
}

const checkStr = (str) => {
    try {
        checkLength(str);
        const splitStr = str.split('').sort();
        let countFirstLetter = 0,
            countSecondLetter = 0,
            firstLetter = ``;
        for (let i = 0; i < splitStr.length; i++) {
            if (i === 0) {
                firstLetter = splitStr[i];
                countFirstLetter++;
                continue;
            }
            (splitStr[i] === firstLetter) ? countFirstLetter++ : countSecondLetter++
        }
        if (countFirstLetter != countSecondLetter) throw new Error(false);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(checkStr(`ooxx`));