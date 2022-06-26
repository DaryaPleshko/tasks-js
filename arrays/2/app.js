//Проверьте, что в объекте есть ключ age

let obj = {
    name: 'Dasha',
    age: 18,
    id: 3,
};
for (let key in obj) {
    key === 'age' ? console.log('yes') : console.log('no');
}