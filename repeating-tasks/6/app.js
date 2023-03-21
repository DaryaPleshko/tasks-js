//На вход подается строка в виде электронной почты пользователя. Необходимо найти в данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить исключение и его обработать 

const emailStr = 'hannapleshko@mail.ru';
const mailCheck = (str) => {
    try {
        if (str.includes('@')) throw new Error(`В строке нет @`);
        return true;
    } catch (error) {
        return error;
    }
}
console.log(mailCheck(emailStr));