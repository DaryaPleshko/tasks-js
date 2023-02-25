// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

const console = require("console");

class Conversion {
    doBinaryNumber = (number) => {
        try {
            if (!/^[0-1]+$/g.test(number)) throw new Error(`Число не бинарное`);
            const reverseNum = number.split('').reverse();
            let newNum = 0;
            for (let i = 0; i < reverseNum.length; i++) newNum += reverseNum[i] * (2 ** i);
            return newNum;
        } catch (error) {
            return error.message;
        }
    }
}
const conversion = new Conversion();
console.log(conversion.doBinaryNumber(`101001`));