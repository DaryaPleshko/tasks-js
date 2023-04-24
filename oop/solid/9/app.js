// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2
class Conversion {
    DecimalNumber = (number) => {
        try {
            if (!/^[0-9]+$/g.test(number)) throw new Error(`It is not a number`);
            return (+number >>> 0).toString(2);
        } catch (error) {
            return error.message;
        }
    }
}
const conversion = new Conversion();
console.log(conversion.DecimalNumber(`41`));