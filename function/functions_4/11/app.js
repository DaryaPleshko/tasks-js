// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

function random() {
    return () => {
        let randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
    }
}

const zamikanie = random();
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