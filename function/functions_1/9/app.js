// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма
//  и false в противном случае

const checkAnograma = (firstVal, secondVal) => {
    try {
        if (firstVal.length !== secondVal.length) throw new Error('длина слов разная');
        const sortFirstVal = firstVal.split('').sort().join('');
        const sortSecondVal = secondVal.split('').sort().join('');
        if (sortFirstVal !== sortSecondVal) throw new Error('слова не являются анограммами');
        return 'слова являются анограммами'
    } catch (error) {
        return error.message;
    }
}

console.log(checkAnograma('Конус'.trim().toLowerCase(), 'Сукно'.trim().toLowerCase()));













// const strokaFirst = 'Конус'.toLowerCase().trim();
// const strokaSecond = 'Сукно'.toLowerCase().trim();
// function chekStrAnagrama(paramFirst, paramSecond) {
//     let anograma = 0;
//     if (paramFirst.length === paramSecond.length) {
//         for (let i = 0; i < paramFirst.length; i++) {
//             (paramFirst.includes(paramSecond[i])) ? anograma += 1 : null;
//         }
//     }
//     return (anograma === 0) ? false : true;
// }
// let rez = chekStrAnagrama(strokaFirst, strokaSecond);
// console.log(rez);