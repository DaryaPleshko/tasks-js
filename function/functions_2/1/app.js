//Напишите функцию, которая переворачивает число.

let value = 123;
function reverseVal(paramVal) {
    paramVal = String(paramVal);
    let rez = '';
    for (let i = paramVal.length - 1; i >= 0; i--) {
        rez += paramVal[i];
    }
    return rez;
}
console.log(reverseVal(value));