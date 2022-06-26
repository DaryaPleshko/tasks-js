// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом  for of

const arr = [2, 5, 9, 15, 0, 4];
for (let i of arr) {
    if (i % 3 === 0) console.log(i);
}



