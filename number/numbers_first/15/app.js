const n = +prompt("Население вселенной =");
if (n % 2 != 0) console.log(`Количество выживших - ${Math.ceil(n / 2)}`);
else console.log(`Количество выживших - ${n / 2}`);