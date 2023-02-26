// Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8
class Conversion {
    doOctalNumber = (number) => {
        try {
            if (!/^[0-9]+$/g.test(number)) throw new Error(`It is not a number`);
            return (+number >>> 0).toString(8);
        } catch (error) {
            return error.message;
        }
    }
}
const conversion = new Conversion();
console.log(conversion.doOctalNumber(`375`));