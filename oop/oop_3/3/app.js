// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    constructor(str) {
        this.str = str;
    }
    check = () => {
        if (!isNaN(this.str) || !this.str.length) throw new Error('значение на входе не подходит');
        return true;
    }
    reverseString = () => (this.check()) ? this.str.split('').reverse().join('') : null;
    upperFirst = () => (this.check()) ? this.str.split('')[0].toUpperCase() + this.str.split('').slice(1).join('') : null;
    upperEvery = () => {
        const splitStr = this.str.split(' ');
        const newArr = splitStr.map(el => el[0].toUpperCase() + el.slice(1))
        return newArr.join('')
    }
}
const wordString = new WordString('hello world my name is dasha');
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());















// class WordString {
//     constructor(str) {
//         this.str = str;
//     }
//     reverseString = () => this.str.split('').reverse().join('');
//     upperFirst = () => {
//         let newStr = ``;
//         const splitStr = this.str.split(' ');
//         for (let i = 0; i < splitStr.length; i++)newStr += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
//         return newStr;
//     }
// }
// const wordString = new WordString('hello world');
// console.log(wordString.reverseString());
// console.log(wordString.upperFirst());