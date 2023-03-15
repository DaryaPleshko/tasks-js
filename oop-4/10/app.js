// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
class Client {
    constructor() {
        this.sendRequest();
    }

    sendRequest () {
        const btn = document.querySelector(`.btn`);
        btn.addEventListener('click', () => {
            try {
                const firstInp = document.querySelector(`.first-inp`).value,
                    secondInp = document.querySelector(`.second-inp`).value,
                    result = document.querySelector(`.result`);
                const obj = { email: firstInp, pwd: secondInp };

                const server = new Server();
                console.log(server.middleware(obj));
                result.innerHTML = JSON.stringify(server.controller(obj));
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
class Server {
    middleware(obj) {
        if (!obj.hasOwnProperty('email')) throw new Error(`Объект не содержит email`);
        if (!obj.hasOwnProperty('pwd')) throw new Error(`Объект не содержит pwd`);
        return this.controller(obj);
    }

    controller(obj) {
        try {
            return this.service(obj);
        } catch (error) {
            return error.message;
        }
    }

    service(obj) {
        return this.repository(obj);
    }

    repository(obj) {
        const array = [  
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ];
        const filtered = array.filter((el) => el.email === obj.email);
        if (filtered.length > 0) throw new Error('email существует');
        array.push(obj)
        return array;
    }
}
const client = new Client();