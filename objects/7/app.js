//На входе у вас объект, которые вы придумываете сами. Необходимо сформировать массив из всех числовых ключей и удвоить каждое.

const obj = {
    id: 1,
    name: 'dasha',
    years: 19
}
const array = [];
for (let key in obj) (!isNaN(obj[key])) ? array.push(obj[key] * 2) : null;
console.log(array);














// const user = {
//     name: 'Dasha',
//     age: 18,
//     1: 27,
// },
//     arr = [];
// for (let key in user) {
//     (!isNaN(user[key])) ? arr.push(user[key] ** 2) : null;
// }
// console.log(arr)