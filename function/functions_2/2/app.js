//Напишите функцию, которая проверяет, является ли переданная строка палиндромом 

const value = 'Anna'.toLowerCase();
function findPalindrom(paramPalind) {
    let reverseStr = paramPalind.split('').reverse().join('');
    return (reverseStr === paramPalind) ? true : false;
}
console.log(findPalindrom(value));
