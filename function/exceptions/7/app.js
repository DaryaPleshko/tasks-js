// На входе подаются 5 значений, данные значения мы вводим с клавиатуры методом prompt. Из данных элементов составить массив. Далее необходимо пройтись по каждому из элементов массива и если это число, то занести его в новый массив. Если длина массива равна 0, то бросить исключение. Обработать исключение. 

const number = 5;
const sortOfArray = (arr) => {
    try {
        let sortNewArray = [];
        if (arr.length > 0) {
            for (let k = 0; k < arr.length; k++) {
                if (!isNaN(arr[k])) sortNewArray.push(arr[k]);
            }
            return sortNewArray;
        } else throw new Error(`Длина массива равна нулю`);

    } catch (error) {
        return error;
    }
}
const writtingNumToAnArray = (number) => {
    let arr = [];
    for (let i = 0; i < number; i++) {
        const elOfArray = +prompt();
        arr.push(elOfArray);
    }
    return sortOfArray(arr);
}
console.log(writtingNumToAnArray(number));