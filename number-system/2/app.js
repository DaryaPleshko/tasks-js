// Реализайте функцию, которая принимает статичный массив и возвращает новый
// массив с отфильтрованными значениями. Массив считается отфильтрованным,
// если в нем присутствуют только числа
// [ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
// [ 1, 2, “aasf”, “1”, “123”, 123 ] –> [ 1, 2, 123 ]



const filterArray = (array) => {
    const filtered = array.filter(el => !isNaN(el));
    return filtered;
}

console.log(filterArray([1, 2, 'a', 'b']));















// const doArray = (array) => {
//     let newArray = array.filter((el) => !isNaN(el));
//     return newArray;
// }
// console.log(doArray([32, 34, `hb`, `njdd`]));