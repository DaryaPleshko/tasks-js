// 4.Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server
// 5.Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// 6. На сервере реализуйте возможность регистрации doRegistration. Если почта
// клиента уникальна и массив репозитория не содержит такую почту, то сохранить
// клиентский объект в массив

class Client {    
    doRegistration = () => {
        const email = document.querySelector('.email'),
            password = document.querySelector('.password');
        document.querySelector('.btn').addEventListener('click', () => {
            const object = { email: email.value, pwd: password.value }
            const server = new Server();
            return server.controller(object);
        });
    }
}
class Server {
    controller = (object) => {
        return this.service(object);
    }

    service = (object) => {
        return this.repository(object);
    }

    repository = (object) => {
        let array = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];

        const filtered = array.filter((el) => el.email === object.email);
        if (filtered.length > 0) throw new Error('email существует');
        array.push({ id: array.length + 1, ...object });
        return array;
    }
}

const client = new Client();
client.doRegistration();
