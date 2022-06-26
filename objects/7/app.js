//На входе у вас объект, которые вы придумываете сами. Необходимо сформировать массив из всех числовых ключей и удвоить каждое.

const user = {
    name: 'Dasha',
    age: 18,
    1: 27,
},
    arr = [];
for (let key in user) {
    (!isNaN(user[key])) ? arr.push(user[key] ** 2) : null;
}
console.log(arr)