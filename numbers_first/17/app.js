const a = +prompt("Количество минут");
console.log(`${a} минут - это ${Math.trunc(a / 60)} час ${a % 60} минут.`);