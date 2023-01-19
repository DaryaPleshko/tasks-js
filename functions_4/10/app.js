//Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const iife = (function (obj) {
    let newObj = {};
    for (let key in obj) (!isNaN(obj[key])) ? newObj[key] = obj[key] : null;
    return newObj;
}({
    id: 1,
    name: 'dasha',
    years: 18
}));

console.log(iife);