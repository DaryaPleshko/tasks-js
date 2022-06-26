// На входе у вас объект, которые вы придумываете сами. Необходимо вывести все числовые значения.

let user = {
    name: 'Dasha',
    age: 18,
    1: 20,
};
for (let num in user) {
    if (!isNaN(user[num])) console.log(user[num]);
};


