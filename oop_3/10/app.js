// Дополнить класс Validator. Добавить метод isDate для проверки на дату.
class Validator {
    isEmail(email) {
        try {
            if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(email)) throw new Error(false);
            return true;
        } catch (error) {
            return error.message
        }
    }

    isURL(url) {
        try {
            if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]+\/[a-zA-Z]+$/g.test(url)) throw new Error(false);
            return true;
        } catch (error) {
            return error.message;
        }
    }

    isDate(date) {
        try {
            if (!/^[0-3][0-9]\.[0-1][0-9]\.[0-9]+$/g.test(date)) throw new Error(false);
            return true;
        } catch (error) {
            return error.message;
        }
    }
}

const validator = new Validator();
console.log(validator.isEmail(`darya.pleshko2004@mail.ru`));
console.log(validator.isURL(`https://github.com/DaryaPleshko`));
console.log(validator.isDate(`27.04.2004`));