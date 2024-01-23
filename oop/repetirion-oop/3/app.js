// Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false

class Word {
    isPalindrom(str) {
        const reverseStr = str.split('').reverse().join('');
        if (reverseStr === str) return true;
        return false;
    }
}
const word = new Word();
console.log(word.isPalindrom('шалаш'));














// class Word {
//     isPalindrom = (str) => {
//         try {
//             const reverseStr = str.split('').reverse().join('');
//             if (str != reverseStr) throw new Error(false);
//             return true;
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// const word = new Word();
// console.log(word.isPalindrom('шалаш'));