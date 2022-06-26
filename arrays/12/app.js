//На входе 6 элементов (как числа, так и строки). 
//Необходимо из этих элементов составить отдельно массив только со строками и отдельно только с числами

const arr = [1, 4, Hanna, Dasha, Eva, 5];
let str = [];
let num = [];
for (let i = 0; i < arr.length; i++) {
    (isNaN(arr[i])) ? str.push(arr[i]) : num.push(arr[i]);
}
console.log(str);
console.log(num);