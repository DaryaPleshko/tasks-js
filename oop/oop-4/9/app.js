// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из инпута: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email}

class Client {
    constructor() {
        this.sendRequest();
    }

    sendRequest() {
        const btn = document.querySelector(`.btn`);
        btn.addEventListener('click', () => {
            try {
                const firstInp = document.querySelector(`.first-inp`).value,
                    secondInp = document.querySelector(`.second-inp`).value,
                    result = document.querySelector(`.result`);

                const object = { email: firstInp, pwd: secondInp };
                result.innerHTML = JSON.stringify(object);
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
const client = new Client();