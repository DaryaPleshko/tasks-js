// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

class ServerGetAll {
    controller = () => this.service();
    service = () => this.repository();
    repository() {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];
        return array;
    }
}

const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());






// class ServerGetAll {
//     controller() {
//         try {
//             const data = this.service();
//             return data;
//         } catch (error) {
//             return error.message;
//         }
//     }

//     service() {
//         const data = this.repository();
//         return data;
//     }

//     repository() {
//         const array = [
//             { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//             { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//             { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//             { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//             { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
//         ];
//         return array;
//     }
// }

// const serverGetAll = new ServerGetAll();
// console.log(serverGetAll.controller());