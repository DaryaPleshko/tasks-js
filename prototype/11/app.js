// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const iife = (function (obj) {
    let newObject = {};
    for (const key in obj) (!isNaN(obj[key])) ? newObject[key] = obj[key] : null;
    console.log(newObject);
}({
    id: 1,
    name: 'dasha',
    years: 18,
    city: 'Minsk'
}));