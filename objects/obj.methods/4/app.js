// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

const create = (num) => {
    let obj = {};
    for (let i = 0; i < num; i++)  obj[i] = i;
    return obj;
};

const findValue = (obj) => {
    const arrayKey = Object.keys(obj);
    let chetNum = arrayKey.filter((el) => el % 2 === 0);
    return chetNum;
}
console.log(findValue(create(5)));