// Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 

class Word {
    constructor(firstStr, secondStr) {
        this.firstStr = firstStr;
        this.secondStr = secondStr;
    }
    checkStr() {
        if (this.firstStr.length != this.secondStr.length) throw new Error('длины не совпадают');
        if (!isNaN(this.firstStr) || !isNaN(this.secondStr)) throw new Error('тип данных не соответствует');
        return true;
    }
    isAnagram() {
        try {
            this.checkStr();
            if (this.firstStr.split('').sort().join('') != this.secondStr.split('').sort().join('')) throw new Error('не анограмма');
            return `анограмма`;
        } catch (error) {
            return error.message;
        }
    }
}
const word = new Word('конус', 'сукно');
console.log(word.isAnagram());













// class Word {
//     check = (firstValue, secondValue) => {
//         if (firstValue.length != secondValue.length) throw new Error(`These aren't anagrams`);
//         if (!isNaN(firstValue) || !isNaN(secondValue)) throw new Error(`Incorrect input`);
//         return true;
//     }
//     isAnagram = (firstValue, secondValue) => {
//         try {
//             this.check(firstValue, secondValue);
//             let count = 0;
//             for (let i = 0; i < firstValue.length; i++)  (firstValue.includes(secondValue[i])) ? count += 1 : null;
//             return (count === secondValue.length) ? true : false;
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// const word = new Word();
// console.log(word.isAnagram('конус', 'сукно'));