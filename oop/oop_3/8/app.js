// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {
    isEmail(str) {
        try {
            if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(str)) throw new Error(false);
            return true;
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator();
console.log(validator.isEmail(`darya.pleshko2004@mail.ru`));