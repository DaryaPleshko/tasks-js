// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const isValid = (str) => {
    try {
        let newStr = str.replaceAll(/ /g, `!`);
        if (str.length != newStr.length) throw new Error(`Длина изменилась`);
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(isValid(`hi my name is dasha`));