// На входе число символизирующее количество элементов массива. Далее вводятся сами значения и формируется массив.
// Необходимо создать новый массив и добавить туда только числа. Использовать map 

const createArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) array.push(+prompt('Input value'));
    return array;
}

const checkArray = (array) => {
    const filtered = array.filter(el => !isNaN(el));
    return filtered;
}

console.log(checkArray(createArray(4)));















// const count = +prompt();
// let arr = [];
// for (let i = 0; i < count; i++) {
//     const value = prompt('');
//     arr.push(value);
// }
// let newArr = arr.filter(el => {
//     if (!isNaN(el)) return el;
// })
// console.log(newArr);