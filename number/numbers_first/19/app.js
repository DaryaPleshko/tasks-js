const a = +prompt("Введите четырёхзначное число");
console.log(`Цифра в позиции тысяч равна ${Math.floor((a % 10000) / 1000)}`);
console.log(`Цифра в позиции сотен равна ${Math.floor((a % 1000) / 100)}`);
console.log(`Цифра в позиции десятков равна ${Math.floor((a % 100) / 10)}`);
console.log(`Цифра в позиции единиц равна ${Math.floor(a % 10)}`);