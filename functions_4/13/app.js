// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const findLetter = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) (str[i] === letter) ? count++ : null;
    return (`В строке ${str} - ${count} буква(ы) ${letter}`)
}

console.log(findLetter(`hanna`, `a`));