//. На входе значение. Необходимо его обработать. Если это число и оно не является
//четным, бросить исключение


const checkNumber = (num) => {
    try {
        if (isNaN(num) || num % 2 == 1) throw new Error('invalid error');
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(checkNumber(4));















// const checkOfChet = (number) => {
//     try {
//         if (isNaN(number)) throw new Error('Это не число');
//         if (number % 2 !== 0) throw new Error('Число не четное');
//         return true;
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(checkOfChet(5));