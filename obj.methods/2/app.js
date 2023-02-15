// Написать функцию на подсчет количества пар ключ значение в объекте.

const check = (obj) => Object.entries(obj).length;


console.log(check({
    id: 1,
    user: 'Darya Pleshko',
    str: 'std un bsuir'
}));