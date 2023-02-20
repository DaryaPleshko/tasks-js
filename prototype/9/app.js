// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const checkKey = (obj) => Object.entries(obj).length;
console.log(checkKey({
    id: 1,
    name: 'Darya',
    surname: 'Pleshko',
    city: 'Minsk'
}))