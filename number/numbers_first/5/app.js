const n = +prompt("Сколько лет вашей собаке?");
if (n <= 2) {
    console.log(`Вашей собаке - ${n * 10.5}`);
} else {
    console.log(`Вашей собаке - ${21 + (n - 2) * 4}`);
}