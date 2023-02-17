// На входе объект.Ключи и значения - автоинкремент(генерируется автоматически
//     от 1 до n).Необходимо отобразить на экране объект(помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript.Для отображения неоходимо
//     преобразовать строку в ...)

const create = (num) => {
    let obj = {};
    for (let i = 0; i < num; i++)  obj[i] = i;
    return obj;
};
const addToHTML = (obj) => {
    const result = document.querySelector('.result');
    result.innerHTML = JSON.stringify(obj);
}
console.log(addToHTML(create(5)));