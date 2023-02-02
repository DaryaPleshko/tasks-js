// Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

const checkStr = (firstStr, secondStr) => {
    try {
        const splitFirst = firstStr.split('');
        const splitSecond = secondStr.split('');
        let newStr = ``;
        for (let i = 0; i < splitSecond.length; i++) if (!newStr.includes(splitFirst[i])) newStr += splitFirst[i];
        if (newStr.length != secondStr.length) throw new Error(false);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(checkStr(`rkqodlw`, `world`));