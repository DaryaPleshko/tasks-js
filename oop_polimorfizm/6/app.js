// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}
class Client {
    constructor() {
        this.sendRequest();
    }

    isValid(email, pwd) {
        if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(email)) throw new Error(`Incorrect email entry!`);
        return true;
    }

    sendRequest() {
        const btn = document.querySelector(`.btn`);
        btn.addEventListener('click', () => {
            try {
                const firstInp = document.querySelector(`.first-inp`).value,
                    secondInp = document.querySelector(`.second-inp`).value,
                    result = document.querySelector(`.result`);

                this.isValid(firstInp, secondInp);
                const object = { email: firstInp, pwd: secondInp };
                result.innerHTML = JSON.stringify(object);
            } catch (error) {
                alert(error.message);
            }
        });
    }
}

const client = new Client();