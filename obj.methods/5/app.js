// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const create = (num) => {
    let obj = {};
    for (let i = 0; i < num; i++)  obj[i] = i;
    return obj;
};
const findKey = (obj) => (obj.hasOwnProperty('10')) ? true : false;

console.log(findKey(create(4)));