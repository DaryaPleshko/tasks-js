// На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и false в противном случае

const stroka = 'Анна'.toLowerCase();
function checkStroka(paramStr) {
    let reverseStr = stroka.split('').reverse().join('');
    return (stroka === reverseStr) ? true : false;
}
let rez = checkStroka(stroka);
console.log(rez);