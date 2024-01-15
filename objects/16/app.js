//Пользователь вводит с клавиатуры число n, символизирующее в последующем количество ключей в объекте
//  (ключи генерируются автоматически от 1 до n). К каждому ключу добавляем значения строки, символизирующие 
//  города (города вводим через prompt). Необходимо пробежаться по всем значениям объекта и если в нем есть 
//  «Минск», вывести true, в противном случае false


const n = +prompt();
const obj = {};
for (let i = 0; i < n; i++) obj.i = +prompt();
for (let key in obj) (obj[key] == 'Минск') ? console.log(true) : console.log(false);



















// const n = +prompt();
// let obj = {};
// for (let i = 0; i < n; i++) {
//     obj[i] = prompt();
// }
// for (let key in obj) {
//     if (obj[key] == 'Минск') {
//         console.log(true);
//         break;
//     }
//     else console.log(false);
// }