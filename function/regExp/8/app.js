// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const check = (str) => {
    try {
        let newStr = str.replaceAll(/[0-9_\^]+/g, "");
        if (str.length != newStr.length) throw new Error(`Длина изменилась`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(check(`pleshko`));