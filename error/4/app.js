// Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывести те элементы массива,
// в котрых id – четное значение

const json = JSON.parse(`[
        { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
        { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
        { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
        { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
        { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]`);


const checkJson = (json) => {
    try {
        if (!Array.isArray(json)) throw new Error('На выходе не массив');
        const filtered = json.filter(el => el.id % 2 === 0);
        return filtered;
    } catch (error) {
        return error.message;
    }
}

console.log(checkJson(json));






// const checkArray = (array) => {
//     try {
//         if (!Array.isArray(array)) throw new Error(`Пришел не массив`);
//         let newArray = array.filter((el) => el.id % 2 === 0)
//         return newArray;
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(checkArray(json));