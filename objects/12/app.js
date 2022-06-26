//На вход подается объект, включающий такие кличи как name, age, birthday, status, но значения этих ключей пустые строки ''. Необходимо считать данные с клавиатуры от пользователя и этими данными заполнить наш объект. Добавить проверки на ввод пустого значения и пробелов


const a = prompt();
const b = prompt();
const c = prompt();
const d = prompt();
let user = {
    name: null,
    age: null,
    birthday: null,
    status: null,
}
if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(d)) {
    user.name = a;
    user.age = b;
    user.birthday = c;
    user.status = d;
}
console.log(user);
