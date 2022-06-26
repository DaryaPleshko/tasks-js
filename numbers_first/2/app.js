const speed1 = +prompt('Введите скорость 1-ой бабушки');
const speed2 = +prompt('Введите скорость 2-ой бабушки');
const distance = +prompt('Введите расстояние');

console.log(`Две бабушки встретятся через ${distance/(speed1+speed2)} часа`);