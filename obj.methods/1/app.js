// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

const findStr = (obj) => (obj.hasOwnProperty('str')) ? true : false;

console.log(findStr({
    id: 1,
    user: 'Darya Pleshko',
    str: 'std un bsuir'
}));
