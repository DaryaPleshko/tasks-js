const str = prompt().toLowerCase();
let adenin = 0;
let guazin = 0;
let citozin = 0;
let timin = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "а") adenin++;
    else if (str[i] === "г") guazin++;
    else if (str[i] === "ц") citozin++;
    else if (str[i] === "т") timin++;
}
console.log(`Аденин: ${adenin}`);
console.log(`Гуанин: ${guazin}`);
console.log(`Цитозин: ${citozin}`);
console.log(`Тимин: ${timin}`);