// На входе есть пароль, который пользователь вводит с клавиатуры.   Требования:   1. Пароль должен содержать не менее 8 символов   В блоке try/catch при обработке пароля необходимо бросить исключение, если в пароле меньше 8 символов.    Если пароль корректный, то вывести *, где одна *- один символ. Пример: 12345678 -> *******. Pass -> исключение

const password = '123456666666666666666666666666666678';
const checkPassword = (numOfPassword) => {
    try {
        if (numOfPassword.length >= 8) return '*'.repeat(numOfPassword.length);
        else throw new Error('вы ввели не 8 символов')
    } catch (err) {
        return err;
    }
}
console.log(checkPassword(password));