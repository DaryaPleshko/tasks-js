// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее необходимо сравнить данные 2 массива. Если они идентичны, то вывести булевое true, в противном случае false. 
//Добавить проверку на ввод пустой строки, лишних пробелов после каждого введенного элемента

let arr_one = [];
let arr_two = [];
for (let i = 0; i <= 10; i++) {
    if (i > 5) {
        const valueA = +prompt('');
        arr_one.push(valueA);
    }
    if (i < 5) {
        const valueB = +prompt('');
        arr_two.push(valueB);
    }
}
(arr_one.join('') === arr_two.join('')) ? console.log(true) : console.log(false);