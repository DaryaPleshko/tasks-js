// Реализайте функцию, которая принимает строку и определяет является ли слово
// изограммой. Изограмма – это слово, в котором нет повторяющихся букв,
// последовательных или непоследовательных
// Dermatoglyphics –> true
// aba –> false
// moOse –> false 

const check = (str) => {
    try {
        const splitStr = str.toLowerCase().split('');
        let newStr = ``;
        for (let i = 0; i < splitStr.length; i++)  if (!newStr.includes(splitStr[i])) newStr += splitStr[i];
        if (newStr.length != str.length) throw new Error(`Incorrect input`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(check(`Dermatoglyphics`));