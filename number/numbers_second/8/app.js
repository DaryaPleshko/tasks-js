const abcd = +prompt(`Введите число`);
if ((abcd.toString().length) == 4) {
    const a = ((Math.floor(abcd / 1000)));
    const b = (Math.floor((abcd / 100) % 10));
    const c = (Math.floor((abcd % 100) / 10));
    const d = (Math.floor(abcd % 10))
    console.log(`${a} - ${(a % 2) > 0 ? 'Число нечетное' : 'Число четное'}`);
    console.log(`${b} - ${(b) % 2 > 0 ? 'Число нечетное' : 'Число четное'}`);
    console.log(`${c} - ${(c) % 2 > 0 ? 'Число нечетное' : 'Число четное'}`);
    console.log(`${d} - ${(d) % 2 > 0 ? 'Число нечетное' : 'Число четное'}`);
} else {
    console.log(`Введенное число не является четырехзначным, повторите ввод.`);
}