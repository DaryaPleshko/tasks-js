//Дан массив внутри строки '[1,2,3,4,5]‘. Необходимо строку преобразовать в массив (JSON.parse). 
// Если же после того как вы спарсили данные у вас 
//не тип данных массив, то исключение. Далее вывести только те числа, которые кратны 2


const array = JSON.parse('[1,2,3,4,5]');

const checkType = (array) => {
    const searchStr = array.some(el => isNaN(el));
    if (searchStr) throw new Error('there is a string in the array');
    if (!Array.isArray(array)) throw new Error('type error');
    return true;
}

const findChetNum = (array) => {
    try {
        checkType(array)
        return array.filter(el => el % 2 == 0);
    } catch (error) {
        return error.message;
    }
}
console.log(findChetNum(array));











// const dataParse = JSON.parse(`[1, 2, 3, 4, 5]`);
// let isArray = (dParse) => {
//     if (typeof dParse === `object`) return true;
//     else throw new Error(`не массив`);
// };
// let isArrayOfNumber = (array) => {
//     let countOfError = 0;
//     array.forEach(element => (!isNaN(element)) ? true : countOfError += 1);
//     if (countOfError > 0) throw new Error(`Внутри массива есть строка`)
//     else return true;
// };
// let findEvenNumbers = (array) => {
//     try {
//         let boolIsArray = isArray(array);
//         let boolIsArrayOfNumber = isArrayOfNumber(array);
//         if (boolIsArray === true && boolIsArrayOfNumber === true) return array.filter((element) => element % 2 == 0);
//     } catch (err) {
//         return err;
//     }
// };
// console.log(findEvenNumbers(dataParse));