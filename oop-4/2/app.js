// Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная
// строка корректным email (Если является - возвращает true, если не является -
// false. Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
    email;
    
    setEmail(email) {
        this.email = email;
    }
    
    isEmail() {
        try {
            if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(this.email)) throw new Error(false);
            return true;
        } catch (error) {
            return error.message;
        }
    }

    getEmail() {
        return this.email;
    }
}
const validator = new Validator();
validator.setEmail('darya.pleshko2004mail.ru')
console.log(validator.isEmail());
console.log(validator.getEmail());

