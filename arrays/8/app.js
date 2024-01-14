// На входе 7 чисел. Из 5 первых элементов составить массив. Далее необходимо пройтись по каждому из элементов 
// массива и если это число НЕ равно 2 другим введенным, то создать занести его в новый массив. Если длина 
// массива равна 0, то вывести ‘Массив пуст’. 
// Добавить проверку на ввод только чисел после каждого введенного элемента. Использовать filter


const inputValue = () => {
    const array = [],
        valuesForComparation = [];
    for (let i = 1; i <= 7; i++) (i <= 5) ? array.push(i) : valuesForComparation.push(i);
    return { array, valuesForComparation }
}

const checkArray = (array, valuesForComparation) => {
    const filtered = array.filter(el => !valuesForComparation.includes(el));
    return filtered;
}

const resultFromInputValue = inputValue();
console.log(checkArray(resultFromInputValue.array, resultFromInputValue.valuesForComparation));











// const arr = [1, 2, 3, 4, 5],
//     valueA = 3,
//     valueB = 10;
// const arrSec = arr.filter(element => element !== valueA && element !== valueB);
// arrSec.length === 0 ? console.log('pustoy massiv') : console.log(arrSec);
