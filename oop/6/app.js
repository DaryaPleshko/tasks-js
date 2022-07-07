//Дополнить 5 задание. Добавить метод isURL для проверки на url

class Validator {

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