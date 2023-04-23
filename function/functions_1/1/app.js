//Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида ,,привет, {имя} {фамилия},, 

function str(name = 'Hanna', surname = 'Pleshko') {
    return `Hello,${name} ${surname}`;
}
let strtwo = str()
console.log(str('Dasha', 'Pleshko'));