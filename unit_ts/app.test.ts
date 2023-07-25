import { isPalindrome, calculateFactorial, capitalizeString, flattenArray } from './app';

describe('isPalindrom:', () => {
    test('- 1', () => {
        const result = isPalindrome('anna');
        expect(result).toBe('Слово палиндром');
    });
    test('- 2', () => {
        const result = isPalindrome('banana');
        expect(result).toBe('Слово не палиндром');
    });
});

describe('calculateFactorial:', () => {
    test('- 1', () => {
        const result = calculateFactorial(3);
        expect(result).toBe(6);
    });
    test('- 2', () => {
        const result = calculateFactorial(-3);
        expect(result).toBe('не соответствует условию');
    });
    test('- 3', () => {
        const result = calculateFactorial('lkkk');
        expect(result).toBe('не соответствует условию');
    });
});

describe('capitalizeString:', () => {
    test('- 1', () => {
        const result = capitalizeString('hello');
        expect(result).toBe('Hello');
    });
    test('- 2', () => {
        const result = capitalizeString(343);
        expect(result).toBe('не строка');
    });
    test('- 3', () => {
        const result = capitalizeString('');
        expect(result).toBe('не строка');
    });
});

describe('flattenArray:', () => {
    test('- 1', () => {
        const result = flattenArray([1, 2, [3, 4]]);
        expect(result).toEqual([1, 2, 3, 4]);   
    });
    test('- 2', () => {
        const result = flattenArray([]);
        expect(result).toBe('массив пустой');
    });
});  