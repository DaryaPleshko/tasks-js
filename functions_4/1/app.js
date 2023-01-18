//На входе число n. Напишите функцию, которая переворачивает число

const reverseNumber = (n) => {
const reverse = String(n);
return reverse.split("").reverse().join("");
};
console.log(reverseNumber(35674));
