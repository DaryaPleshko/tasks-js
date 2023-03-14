// Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": 1, "email": "apqpq@gmail.com"
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 
class ServerPut {
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
        const filtered = array.filter(el => el.id != obj.id);
        if (filtered.length === array.length) throw new Error('id не существует');
        filtered.push(obj);
        return filtered;
    }
}
const obj = { "id": 1, "email": "apqpq@gmail.com" }
const serverPut = new ServerPut();
console.log(serverPut.controller(obj));