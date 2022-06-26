// На входе у вас объект, которые вы придумываете сами. Необходимо сформировать массив из всех нечетных значений объекта.

let user = {
    name: 'Dasha',
    age: 18,
    1: 27,
},
    arr = [];
for (let key in user) {
    if (!isNaN(user[key]) && user[key] % 2 != 0) arr.push(user[key])
}


