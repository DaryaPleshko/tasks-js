// Дополнить класс Validator. Добавить метод isURL для проверки на url.
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
}

const validator = new Validator();
console.log(validator.isEmail(`darya.pleshko2004@mail.ru`));
console.log(validator.isURL(`https://github.com/DaryaPleshko`));