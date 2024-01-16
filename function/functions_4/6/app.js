//. Работа с замыканием. Реализуйте функцию, которая будет считать количество
//своих вызовов


function zamikanie() {
    let count = 0;
    return () => console.log(count += 1);
}
const funct = zamikanie();
funct();
funct();
funct();
funct();












// function func() {
//     let value = 0;
//     return () => {
//         value += 1;
//         console.log(value);
//     }
// }

// const zamikanie = func();
// zamikanie();
// zamikanie();
// zamikanie();
// zamikanie();
// zamikanie();
// zamikanie();
// zamikanie();
