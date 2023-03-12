// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 
class ServerById {
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
        const filtered = array.filter((el) => el.id === obj.id);
        if (filtered.length === 0) throw new Error('id не существует');
        return filtered;
    }
}
const obj = JSON.parse(`{ "id": 1 }`);

const serverGetAll = new ServerById();
console.log(serverGetAll.controller(obj));