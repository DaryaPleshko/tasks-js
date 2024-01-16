// На входе подаются 5 значений, данные значения мы вводим с клавиатуры методом prompt. 
// Из данных элементов составить массив. Далее необходимо пройтись по каждому из элементов массива
//  и если это число, то занести его в новый массив. Если длина массива равна 0, то бросить исключение. 
//  Обработать исключение. 

const createArray = (num) => {
    const array = [];
    for (let i = 0; i < num; i++) array.push(Math.floor(Math.random() * 100));
    return array;
}
const checkArray = (array) => {
    try {
        if (!array.length) throw new Error('array is empty');
        return array;
    } catch (error) {
        return error.message;
    }
}
console.log(checkArray(createArray(5)));









// const number = 5;
// const sortOfArray = (arr) => {
//     try {
//         let sortNewArray = [];
//         if (arr.length > 0) {
//             for (let k = 0; k < arr.length; k++) {
//                 if (!isNaN(arr[k])) sortNewArray.push(arr[k]);
//             }
//             return sortNewArray;
//         } else throw new Error(`Длина массива равна нулю`);

//     } catch (error) {
//         return error;
//     }
// }
// const writtingNumToAnArray = (number) => {
//     let arr = [];
//     for (let i = 0; i < number; i++) {
//         const elOfArray = +prompt();
//         arr.push(elOfArray);
//     }
//     return sortOfArray(arr);
// }
// console.log(writtingNumToAnArray(number));