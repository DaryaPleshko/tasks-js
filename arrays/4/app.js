//Удалите из массива объектов объект с name == "Anna". На выходе мы должны получить новый из двух элементов объектов без объекта, в котором ключ name == "Anna".

let obj = [
    { name: 'Bob' },
    { name: 'John' },
    { name: 'Anna' },
];
const objSec = obj.filter(element => element.name !== 'Anna')
console.log(objSec);