// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const checkEmail = (email) => {
    try {
        if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(email)) throw new Error(`Некорректный ввод`);
        return true;
    } catch (error) {
        return error.message
    }
}
console.log(checkEmail(`dasha.pleshko2004@mail.ru`));