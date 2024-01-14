//Имеется массив объектов. Получите из этого массива объект, где name === "Bob" и сохраните это в какой-либо переменной



const obj = [{ id: 1, name: "dasha" }, { id: 2, name: "bob" }];
const filtered = obj.filter(el => el.name === "bob");
console.log(filtered);







// let arr = [
//     { name: 'Bob' },
//     { name: 'Dasha' },
//     { name: 'Hanna' },
//     { name: 'Daniil' },
// ];
// let rez = arr.filter(el => el.name === 'Bob')
// console.log(rez)