// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

const isPalindrome = (word: string): string => {
    try {
        if (word.split('').reverse().join('') != word) throw new Error('Слово не палиндром');
        return 'Слово палиндром';
    } catch (error) {
        return error.message;
    }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

const calculateFactorial = (n: any): any => {
    try {
        if (typeof n === 'string' || n <= 0) throw new Error('не соответствует условию')
        let fact = 1;
        for (let i: number = 1; i <= n; i++)  fact = fact * i;
        return fact;
    } catch (error) {
        return error.message;
    }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

const capitalizeString = (str: any): any => {
    try {
        if (typeof str !== 'string' || str.trim().length === 0) throw new Error('не строка');
        let newStr = ``;
        const strArray = str.split(' ');
        for (let i: number = 0; i < strArray.length; i++) {
            newStr += strArray[i][0].toUpperCase() + strArray[i].slice(1) + ' ';
        }
        return newStr.trim();
    } catch (error) {
        return error.message;
    }
}

// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

const flattenArray = (array: any[]) => {
    try {
        if (array.length === 0) throw new Error('массив пустой');
        return array.flat();
    } catch (error) {
        return error.message;
    }
}

// 5. Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.
// 6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.
// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
    getLongesWord(array: any) {
        let checkLength = 0;
        for (let i = 0; i < array.length; i++) {
            array[i].length > checkLength ? checkLength = array[i].length : null;
        }
        return checkLength;
    }
    getUnuqueWords(array: any[]) {
        let noIncludes: any[] = [];
        for (let i = 0; i < array.length; i++) {
            !noIncludes.includes(array[i]) ? array[i].push(noIncludes) : null;
        }
        return noIncludes;
    }
}


export { isPalindrome, calculateFactorial, capitalizeString, flattenArray, StringArray }