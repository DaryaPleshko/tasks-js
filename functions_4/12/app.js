// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const iife = (function (obj) {
    count = 0;
    for (let key in obj) (key) ? count++ : null;
    return count;
}({
    id: 1,
    name: 'dasha',
    years: 18,
    city: 'Minsk',
    university: 'BSUIR'
}));

console.log(iife);
