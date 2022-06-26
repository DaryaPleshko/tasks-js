// На входе у вас объект, которые вы придумываете сами. Необходимо вывести все числовые ключи.


let user = {
    name: 'Dasha',
    age: 18,
    1: 20,
}
for (let key in user) {
    if (!isNaN(key)) console.log(key);
}

