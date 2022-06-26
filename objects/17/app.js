//На входе есть объект с повторяющимися значениями. Необходимо отфильтровать значения объекта и оставить только уникальные значения 

let obj = {
    a: 10,
    b: 20,
    c: 10,
    d: 50,
    e: 10,
};
let arr = [];

for (let key in obj) {
    if (arr.includes(obj[key])) {
        continue;
    } else arr.push(obj[key]);
}
obj.add = arr;
console.log(obj.add);
console.log(arr);