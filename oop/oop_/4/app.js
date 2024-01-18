// У вас есть класс Fibonacci. Создать в нем функцию для вывода ряда фибоначчи. Проверки 


class Fibonacci {
    constructor(febLength) {
        this.febLength = febLength;
    }
    validatorFibonacci() {
        if (isNaN(this.febLength)) throw new Error('на входе строка');
        if (this.febLength.length >= 0) throw new Error('значение на входе не соответствует требованиям');
        return true;
    }
    createFibonacci() {
        try {
            this.validatorFibonacci();
            const row = [0, 1];
            for (let i = 2; i <= this.febLength; i++) row.push(row[i - 1] + row[i - 2]);
            return row;
        } catch (error) {
            return error.message;
        }
    }
}

const fibonacci = new Fibonacci(6);
console.log(fibonacci.createFibonacci());












// class Fibonacci {
//     constructor(febLength) {
//         this.febLength = febLength;
//     }

//     checkFebNumb = () => {
//         if (!Number.isInteger(this.febLength)) throw new Error('Не число');
//         if (this.febLength <= 0) throw new Error('Некорректное значение')
//         return true;
//     }

//     doFebSer = () => {
//         try {
//             const arrToRet = [];
//             if (this.checkFebNumb()) {
//                 for (let i = 0; i < this.febLength; i++) {
//                     if (i === 0 || i === 1) arrToRet.push(i);
//                     else arrToRet.push(arrToRet[i - 1] + arrToRet[i - 2]);
//                 }
//                 return arrToRet;
//             }
//         } catch (err) {
//             return err.message;
//         }

//     }
// }

// const showFeb = new Fibonacci(8);
// console.log(showFeb.doFebSer());
