// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const createObj = (n) => {
    const obj = {};
    for (let i = 0; i < n; i++) obj[i] = Math.floor(Math.random() * 100);
    return obj;
}

const outputObj = (obj) => Object.values(obj)

console.log(outputObj(createObj(7)));












// const createObj = (num) => {
//     let obj = {};
//     for (let i = 0; i < num; i++)  obj[i] = Math.floor(Math.random() * 100);
//     return obj;
// };
// const findValues = (obj) => {
//     const arrayValues = Object.values(obj);
//     return arrayValues;
// };

// console.log(findValues(createObj(4)));