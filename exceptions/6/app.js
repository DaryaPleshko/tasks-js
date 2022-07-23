//На вход подается число n – количество элементов массива. Необходимо заполнить массив случайными элементами. Далее пройтись по массиву, если число > 10, но < 100, то занести в новый массив. В противном случае выбросить исключение и обработать его. Обратите внимание, тут как минимум 3 функции. Первая на формирование массива. Вторая на проверку элементов массива. Третья на основную логику задачи

const numberOfElemInTheArray = +prompt();
const sortOfArray = (arr) => {
    try {
        let sortNewArray = []; 
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > 10 && arr[j] < 100) sortNewArray.push(arr[j]);
        }
        return sortNewArray
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
console.log(writtingNumToAnArray(numberOfElemInTheArray));