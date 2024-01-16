//Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
//последующем вызове функции


function func() {
    let value = '';
    return (str) => console.log(value += str);
}

const zamikanie = func();
zamikanie('lolo');
zamikanie('kiko');
zamikanie('popo');













// function func() {
//     let concat = ``;
//     return (value) => console.log(concat += value);
// }

// const zamikanie = func();
// zamikanie(`hi,`);
// zamikanie(`my`);
// zamikanie(`_`);
// zamikanie(`name`);
// zamikanie(`_`);
// zamikanie(`is`);
// zamikanie(`_`);
// zamikanie(`Dasha`);
