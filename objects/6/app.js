// На входе у вас объект, которые вы придумываете сами. Необходимо все числовые значения удвоить на выходе.

const user = {
    name: 'Dasha',
    age: 18,
    1: 27,
}
for (let key in user) {
    if (!isNaN(user[key])) console.log(user[key] ** 2)
}
