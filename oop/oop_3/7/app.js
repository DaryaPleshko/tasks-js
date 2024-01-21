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
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 

class ServerById {
    middleware = (json) => {
        if (!json.length) throw new Error('объект пуст');
        return true;
    }
    controller = (json) => {
        try {
            this.middleware(json)
            return this.service(json);
        } catch (error) {
            return error.message;
        }
    }
    service = (json) => this.repository(json);
    repository = (json) => {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];
        const filtered = array.filter(el => el.id === json.id);
        return filtered;
    }
}
const serverById = new ServerById();
console.log(serverById.controller({ "id": "javascript" }));















// class ServerGetAll {
//     controller(obj) {
//         try {
//             return this.service(obj);
//         } catch (error) {
//             return error.message;
//         }
//     }

//     service(obj) {
//         return this.repository(obj);
//     }

//     repository(obj) {
//         const array = [
//             { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//             { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//             { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//             { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//             { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
//         ];
//         const filtered = array.filter((el) => el.id === obj.id);
//         if (filtered.length === 0) throw new Error('id не существует');
//         return filtered;
//     }
// }

// const obj = { "id": "javascript" }

// const serverGetAll = new ServerGetAll();
// console.log(serverGetAll.controller(obj));