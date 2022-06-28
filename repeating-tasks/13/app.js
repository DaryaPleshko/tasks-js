//У вас изначально задан пустой объект obj. С клавиатуры вводятся 2 числа и записываются соответственно, как: a, b. 
//Необходимо в наш объект под ключ «avg» вставить среднее арифметическое значение введенных с клавиатуры чисел (a + b) / 2 

let object = {};
const creatingAvg = (number) => {
    let a = +prompt();
    let b = +prompt();
    return number.avg = (a + b) / 2;
}
console.log(creatingAvg(object));