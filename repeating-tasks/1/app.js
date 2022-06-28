//Ввести строку. Проверить является ли это число или строка. Если число, то выяснить, четное или нет. Если это строка и она равна “hschool”, вывести true. В противном случае false. Добавить проверки для строк

const someString = 'hschool';
const checkStrOrNum = (str) => {
    if (!isNaN(str)) {
        return (str % 2 == 0) ? 'chet' : 'nechet';
    } else {
        return (str === 'hschool') ? true : false;
    }
}
console.log(checkStrOrNum(someString));

