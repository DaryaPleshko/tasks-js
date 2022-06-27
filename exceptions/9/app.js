// На вход подается строка в виде электронной почты пользователя. Необходимо прописать регулярное выражение для данной строки. Если же строка подходит под наше регулярное выражение, то вывести булевое true, в противном случае бросить исключение и его обработать. 

const emailStr = 'dasha_pleshko2004mail.ru';
const chekEmail = (str) => {
    try {
        if (/^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]+$/g.test(str)) return true;
        else throw new Error(`В строке нет @`);
    } catch (error) {
        return error;
    }
}
console.log(chekEmail(emailStr));