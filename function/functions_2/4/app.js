//Напишите функцию, которая принимает строку в качестве параметра и находит самое длинное слово в строке. 'Web Development Tutorial‘ -> "Development“

let str = 'Web Development Tutorial'.split(' ');
let findlongStr = (el) => {
    let val = el[0];
    el.forEach(element => (element.length > val.length) ? val = element : null);
    return val;
}
console.log(findlongStr(str));