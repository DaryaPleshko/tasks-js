// На входе у вас объект, которые вы придумываете сами. Необходимо вывести все числовые значения.


const obj = {
    id: 1,
    name: 'dasha',
    years: 19,
}
for (let key in obj) (!isNaN(obj[key])) ? console.log(obj[key]) : null;

















// let user = {
//     name: 'Dasha',
//     age: 18,
//     1: 20,
// };
// for (let num in user) {
//     if (!isNaN(user[num])) console.log(user[num]);
// };


