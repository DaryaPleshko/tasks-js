// Дополнить 5 задание. Добавить метод isPhone для проверки на номер телефона

class Validator {

    isPhone = (phone) => {
        try {
            if (phone.length === 0) throw new Error('Вы ничего не ввели');
            if (!/^\+([0-9]{3})\(([0-9]{2})\)([0-9]{3})\-([0-9]{2})\-([0-9]{2})+$/g.test(phone)) throw new Error('Некорректно введен номер телефона');
            return true;
        } catch (error) {
            return error.message;
        }
    }

    isDate = (date) => {
        try {
            if (date.length === 0) throw new Error('Вы ничего не ввели');
            if (!/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})+$/g.test(date)) throw new Error('Некорректно введена date');
            return true;
        } catch (error) {
            return error.message;
        }
    }


    isURL = (url) => {
        try {
            if (url.length === 0) throw new Error('Вы ничего не ввели');
            if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]+$/g.test(url)) throw new Error('Некорректно введен url');
            return true;
        } catch (error) {
            return error.message;
        }
    }


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
console.log(validator.isURL('https://sisters.com'));
console.log(validator.isDate('06.07.2022'));
console.log(validator.isPhone('+375(29)622-44-80'));