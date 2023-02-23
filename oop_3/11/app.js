// Дополнить класс Validator. Добавить метод isPhone для проверки на номер телефона.
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

    isPhone(number) {
        try {
            if (!/^\+(375|80)\([\d]{2}\)[\d]{3}\-[\d]{2}\-[\d]{2}/g.test(number)) throw new Error(false);
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
console.log(validator.isPhone(`+375(29)645-23-34`));