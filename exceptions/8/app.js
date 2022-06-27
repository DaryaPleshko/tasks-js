//На вход подается строка в виде электронной почты пользователя. Необходимо найти в данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить исключение и его обработать

const emailStr = 'dasha.pleshko2004@mail.ru';
const chekEmail = (str) => {
    try {
        if (str.includes('@')) return true;
        else throw new Error(`В строке нет @`);
    } catch (error) {
        return error;
    }
}
console.log(chekEmail(emailStr));