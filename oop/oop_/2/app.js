// Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString(),
//  переворачивающий строку, метод upperFirst(), возвращающий строку, где первая буква заглавная и метод upperEvery(),
//  который делает заглавной первую букву каждого слова этой строки. 

class WorldString {
    constructor(str) {
        this.str = str;
    }
    reverseString() { return this.str.split('').reverse().join(''); }
    upperFirst() {
        const lowerCaseArray = this.str.toLowerCase().split('');
        return lowerCaseArray[0].toUpperCase() + lowerCaseArray.slice(1).join('');
    }
    upperEvery() {
        const lowerCaseArray = this.str.toLowerCase().split(' ');
        return (lowerCaseArray.map(el =>el[0].toUpperCase()+el.slice(1))).join(' ');
    }
}

const worldString = new WorldString('hi, have a good day');
console.log(worldString.reverseString());
console.log(worldString.upperFirst());
console.log(worldString.upperEvery());

















// class WordString {
//     constructor(word) {
//         this.word = word
//     }

//     reverseString = () => {
//         const mainWord = this.word
//         return mainWord.split('').reverse().join('')
//     }

//     upperFirst = () => {
//         const mainWord = this.word.split('')
//         return mainWord[0].toUpperCase() + mainWord.join('').slice(1)
//     }

//     upperEvery = () => {
//         const mainWord = this.word.split(' ')
//         let outWord = []
//         for (let i = 0; i < mainWord.length; i++) {
//             outWord.push(mainWord[i][0].toUpperCase()+mainWord[i].slice(1))
//         }
//         return outWord.join(' ')
//     }
// }

// const wordString = new WordString(`hello my name is dasha`)
// console.log(wordString.reverseString())
// console.log(wordString.upperFirst())
// console.log(wordString.upperEvery())