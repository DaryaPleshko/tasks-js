// Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина
// слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t 

const findLetters = (str) => {
    try {
        let letter = ``;
        const halfLength = str.length / 2;
        (str.length % 2 === 0) ? letter = str[halfLength - 1] + str[halfLength] : letter = str[Math.floor(halfLength)];
        return letter
    } catch (error) {
        return error.message;
    }
}
console.log(findLetters(`tehst`));