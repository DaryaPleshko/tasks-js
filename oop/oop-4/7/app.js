// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "email": "apqpq@gmail.com"
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
// {"id": 6, "email": "apqpq@gmail.com" }
// Если совпадение есть – ошибка. Добавить проверки   

class ServerPost {
    middleware(obj) {
        if (obj.length === 0) throw new Error(`Объект пустой`);
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
            { "id": 1, "email": "yesenia@mail.ru" },
            { "id": 2, "email": "hanna@mail.ru" },
            { "id": 3, "email": "stanislau@mail.ru" },
            { "id": 4, "email": "german@mail.ru" },
            { "id": 5, "email": "maria@mail.ru" }
        ];
        const filtered = array.filter((el) => el.name === obj.name);
        if (filtered.length > 0) throw new Error('name уже существует');
        array.push({ "id": obj.label.toLowerCase(), ...obj });
        return array;
    }
}

const obj = JSON.parse(`{"id": 6, "email": "apqpq@gmail.com" }`);

const serverPost = new ServerPost();
console.log(serverPost.controller(obj));