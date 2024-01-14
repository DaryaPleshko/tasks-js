// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее необходимо сравнить данные 2 массива. Если они идентичны, то вывести булевое true, в противном случае false. 
//Добавить проверку на ввод пустой строки, лишних пробелов после каждого введенного элемента


const createArray = () => {
    const firstArray = [],
        secondArray = [];
    for (let i = 1; i <= 10; i++)(i <= 5) ? firstArray.push(+prompt('Введите значение')) : secondArray.push(+prompt('Введите значение'));
    return { firstArray, secondArray }
}

const checkArray = (firstArray, secondArray) => {
    if (!firstArray.length || !secondArray.length) throw new Error('Array is empty');
    return true;
}

const confirmArrays = (firstArray, secondArray) => {
    try {
        checkArray(firstArray, secondArray);
        return (firstArray.join('') === secondArray.join('')) ? true : false;
    } catch (error) {
        return error.message;
    }
}

const resultFromInputArrays = createArray(); 
console.log(confirmArrays(resultFromInputArrays.firstArray, resultFromInputArrays.secondArray));











// let arr_one = [];
// let arr_two = [];
// for (let i = 0; i <= 10; i++) {
//     if (i > 5) {
//         const valueA = +prompt('');
//         arr_one.push(valueA);
//     }
//     if (i < 5) {
//         const valueB = +prompt('');
//         arr_two.push(valueB);
//     }
// }
// (arr_one.join('') === arr_two.join('')) ? console.log(true) : console.log(false);