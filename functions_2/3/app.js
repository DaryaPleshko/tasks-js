//Напишите функцию, которая возвращает переданную строку с буквами в алфавитном порядке. 'alphabetical' -> 'aaabcehillpt‘ 

const str = 'alphabetical';
let toRightStr = (el) => el.split('').sort().join('')
console.log(toRightStr(str));
