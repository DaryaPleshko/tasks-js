//Имеется массив объектов. Получите из этого массива объект, где name === "Bob" и сохраните это в какой-либо переменной

let arr = [
    { name: 'Bob' },
    { name: 'Dasha' },
    { name: 'Hanna' },
    { name: 'Daniil' },
];
let rez = arr.filter(el => el.name === 'Bob')
console.log(rez)