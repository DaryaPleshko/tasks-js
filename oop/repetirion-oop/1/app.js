// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
    constructor() {
        this.sendRequest();
    }
    sendRequest = () => {
        const btn = document.querySelector('.btn'),
            email = document.querySelector('.email-inp'),
            pwd = document.querySelector('.pwd-inp'),
            result = document.querySelector('.result');
        btn.addEventListener('click', () => {
            const obj = { email: email.value, pwd: pwd.value };
            result.innerHTML = JSON.stringify(obj);
        });
    }
}
const client = new Client();