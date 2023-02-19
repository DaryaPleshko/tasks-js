// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    constructor(str) {
        this.str = str;
    }
    reverseString = () => this.str.split('').reverse().join('');
    upperFirst = () => {
        let newStr = ``;
        const splitStr = this.str.split(' ');
        for (let i = 0; i < splitStr.length; i++)newStr += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
        return newStr;
    }
}
const wordString = new WordString('hello world');
console.log(wordString.reverseString());
console.log(wordString.upperFirst());