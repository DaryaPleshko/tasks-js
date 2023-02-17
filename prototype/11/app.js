// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const iife = (function (obj) {
    let newObj = {};
    const valueObj = Object.values(obj);

}({
    id: 1,
    name: 'dasha',
    years: 18,
    city: 'Minsk'
}));

console.log(iife);