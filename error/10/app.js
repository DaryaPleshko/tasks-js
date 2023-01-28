//На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const checkEmai = (emai) => {
    try {
        const array = emai.split("");
        if (!array.includes('@')) throw new Error(`Почта не содержит @`)
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkEmai(`dasha.pleshko@mail.ru`));