// Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

class WordString {
    constructor(str) {
        this.str = str;
    }
    reverseString = () => {
        try {
            if (!isNaN(this.str)) throw new Error(`it's not string`);
            return this.str.split('').reverse().join('');
        } catch (error) {
            return error.message;
        }
    }
}
const wordString = new WordString('hello');
console.log(wordString.reverseString())