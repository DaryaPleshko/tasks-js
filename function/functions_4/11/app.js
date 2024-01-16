// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

function func() {
    return () => console.log(Math.ceil(Math.floor(Math.random() * 100)));
}

const zamikanie = func();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();