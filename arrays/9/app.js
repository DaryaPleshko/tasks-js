//На входе 5 чисел. Из элементов составить массив. Далее необходимо вывести лишь уникальные значения массива. Если длина массива равна 0, то вывести ‘Массив пуст’. 
//Добавить проверку на ввод только чисел после каждого введенного элемента. Использовать filter  

let arr = [].sort();
let newArr = [];
for (let i = 0; i < 5; i++) {
    const value = +prompt();
    (!isNaN(value)) ? arr.push(value) : console.log('nekkorectni vvod');
}
arr.forEach(el => {
    if (!newArr.includes(el)) newArr.push(el);
})
console.log(newArr);