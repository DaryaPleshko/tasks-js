// Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
// каждый единичный символ числа, значение – четность / нечетность. Добавить
// проверки
// 542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” }





const checkOfChet = (num) => {
    let array = [...num.toString()].map(Number);
    const obj = {};
    for (let i = 0; i < array.length; i++) (array[i] % 2 === 0) ? obj[array[i]] = 'chet' : obj[array[i]] = 'nechet';
    return obj;
}
console.log(checkOfChet(`345678`));




// const chtckOfChet = (num) => {
//     try {
//         let obj = {};
//         for (let i = 0; i < num.length; i++) (num[i] % 2 === 0) ? obj[num[i]] = `chetnoe` : obj[num[i]] = `nechetnoe`;
//         return obj;
//     } catch (error) {
//         return error.message;
//     }
// }
// console.log(chtckOfChet(`542613`));