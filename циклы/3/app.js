//Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение элементов этого массива
let arr = [2, 3, 4, 5];
let rez = 1;
for (let i = 0; i < arr.length; i++) {
    rez *= arr[i];
}
console.log(rez);

let arr_ = [2, 3, 4, 5];
let i_ = 0;
let rez_ = 1;
while (i < arr_.length) {
    rez_ *= arr_[i];
    i++;
}
console.log(rez_);

let arr__ = [2, 3, 4, 5];
let i__ = 0;
let rez__ = 1;
do {
    rez__ *= arr[i];
    i++;
} while (i < arr__.length);
console.log(rez__);