// Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 

class Word {
    check = (firstValue, secondValue) => {
        if (firstValue.length != secondValue.length) throw new Error(`These aren't anagrams`);
        if (!isNaN(firstValue) || !isNaN(secondValue)) throw new Error(`Incorrect input`);
        return true;
    }
    isAnagram = (firstValue, secondValue) => {
        try {
            this.check(firstValue, secondValue);
            let count = 0;
            for (let i = 0; i < firstValue.length; i++)  (firstValue.includes(secondValue[i])) ? count += 1 : null;
            return (count === secondValue.length) ? true : false;
        } catch (error) {
            return error.message;
        }
    }
}
const word = new Word();
console.log(word.isAnagram('конус', 'сукно'));