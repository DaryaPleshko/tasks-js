// Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах. 

class Calculator {
    constructor(value) {
        this.value = value;
    }
    doSqrt = () =>  Math.floor(Math.sqrt(this.value));
}
const calculator = new Calculator(15);
console.log(calculator.doSqrt());















// class Calculator {
//     doSort(number) {
//         try {
//             if (isNaN(number)) throw new Error(`This is a string`);
//             return `${Math.sqrt(number)}`;
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.doSort(25));