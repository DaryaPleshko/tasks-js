//На вход подается строка. Необходимо вывести количество гласных
// исходной строки. Гласными являются «a», «e», «i», «o», «u». Добавить проверки на
// ввод

const valueA = prompt('Введите строку').trim().toLowerCase();
let rez = 0;
for (let i = 0; i < valueA.length; i++) {
    if (valueA[i] == 'a' || valueA[i] == 'e' || valueA[i] == 'i' || valueA[i] == 'o' || valueA[i] == 'u') rez += 1;
}
console.log(rez);