//Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, является
// ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false

class Validator {

    isEmail = (email) => {
        try {
            if (email.length === 0) throw new Error('Вы ничего не ввели');
            if (!/^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,6}$/g.test(email)) throw new Error('Некорректно введен email');
            return true;
        } catch (error) {
            return error.message;
        }
    }
}
const validator = new Validator();
console.log(validator.isEmail('dasha.pleshko2004@mail.ru'));