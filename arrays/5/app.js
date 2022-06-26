//Необходимо пройтись по всем age и удвоить каждое значение. На выходе мы должны получить новый массив объектов такого же вида, но с удвоенным age

let arr = [
    { age: 13 },
    { age: 16 },
    { age: 10 },
];
const newArr = arr.map(element => { age: element.age * 2 })
console.log(newArr);