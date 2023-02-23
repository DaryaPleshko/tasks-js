// Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
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
        let array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];
        const filtered = array.filter((el) => el.id === obj.id);
        if (filtered.length === 0) throw new Error('id не существует');
        let bd = array.filter(el => el.id != obj.id);
        bd.push(obj);
        array = bd;
        return array;
    }
}
let obj = { "id": "javascript", "label": "hihi", "category": "programmingLanguages", "priority": 1 };
const serverPut = new ServerPut();
console.log(serverPut.middleware(obj));