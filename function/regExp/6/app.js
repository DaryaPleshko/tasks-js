// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const isValid = (wayToFail) => {
    try {
        if (!/^[A-Z]:(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[a-z]+\.[a-z]{1,5}$/gm.test(wayToFail)) throw new Error(`Некорректный ввод`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(isValid(`C:/UsersAdmin/Desktop/test.txt`));