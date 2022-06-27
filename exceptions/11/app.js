//На вход подается строка в виде ФИО сотрудника предприятия. Необходимо проверить ввел ли пользователь все данные (то есть 3 значения раздеенных пробелом). Также на наличие специальных символов, чисел. Если же все верно, то вывести булевое true, в противном случае бросить исключение и его обработать. Плешко Анна Юрьевна -> true. Плешко 12 -> исключение

const fio = 'Плешк@!!о Дар3ья Юрьевна';
const checkFio = (str) => {
    try {
        const arrayOfFio = str.split(' ');
        if (arrayOfFio.length == 3) return true
        else throw new Error('проверьте длину ФИО');
    } catch (err) {
        return err;
    }
}
const validationFio = (str) => {
    try {
        const boolCheckFio = checkFio(str);
        if (boolCheckFio && /^[a-zA-Z]+$/g.test(str)) return true;
        else throw new Error('в строке есть спец символы')
    } catch (error) {
        return error;
    }
}
console.log(validationFio(fio));