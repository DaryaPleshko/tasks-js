// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и false в противном случае

const strokaFirst = 'Конус'.toLowerCase().trim();
const strokaSecond = 'Сукно'.toLowerCase().trim();
function chekStrAnagrama(paramFirst, paramSecond) {
    let anograma = 0;
    if (paramFirst.length === paramSecond.length) {
        for (let i = 0; i < paramFirst.length; i++) {
            (paramFirst.includes(paramSecond[i])) ? anograma += 1 : null;
        }
    }
    return (anograma === 0) ? false : true;
}
let rez = chekStrAnagrama(strokaFirst, strokaSecond);
console.log(rez);