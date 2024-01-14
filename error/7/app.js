//Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9^2 === 81, 1^2=== 1)


const sqrtNumber = (num) => {
    try {
        if (isNaN(num)) throw new Error('введена строка');
        const arrayOfDigits = Array.from(String(num), Number);
        const filtered = arrayOfDigits.map(el => el ** 2 );
        return filtered.join('');
    } catch (error) {
        return error.message;
    }
}

console.log(sqrtNumber(9119));











// const raisingNumber = (number) => {
//     try {
//         const splitNum = number.split('');
//         let newNumber = ``;
//         let countStr = 0;
//         for (let i = 0; i < splitNum.length; i++) {
//             (isNaN(splitNum[i])) ? countStr++ : null;
//             newNumber += splitNum[i] ** 2;
//         }
//         if (countStr > 0) throw new Error(`Неккоректный ввод`);
//         return newNumber;
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(raisingNumber(`9119`));