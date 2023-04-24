// Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
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
    middleware = (obj) => {
        if (obj.length === 0) throw new Error(`Объект пустой`);
        return this.controller(obj);
    }

    controller = (obj) => {
        try {
            return this.service(obj)
        } catch (error) {
            return error.message;
        }
    }
    service = (obj) => {
        return this.repository(obj);
    }
    repository = (obj) => {
        const array = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]
        const filtered = array.filter((el) => el.id === obj.id);
        if (filtered.length === 0) throw new Error('id не существует');
        return filtered;
    }
}
const obj = JSON.parse(`{"id": 1}`);
const serverGetAll = new ServerById();
console.log(serverGetAll.middleware(obj));
