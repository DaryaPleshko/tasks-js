//Является ли слова анаграммами. Добавить проверки (как вы считаете какие проверки здесь необходимы?) 

const firstStr = 'Конус'.toLowerCase().trim();
const secondStr = 'Сукно'.toLowerCase().trim();
const checkForNumOfLetter = (firstStr, secondStr) => {
    if (firstStr.length == secondStr.length) return true;
    else throw new Error('длины строк разные');
};
const checkForAnagrama = (firstStr, secondStr) => {
    try {           
        let countLetter = 0;
        if (checkForNumOfLetter(firstStr, secondStr)) {
            for (let i = 0; i < firstStr.length; i++) {
                if (firstStr.includes(secondStr[i])) countLetter += 1;
            }
            if (countLetter == firstStr.length) return true;
            else throw new Error('слово не является анаграмой');
        }
    } catch (err) {
        return err;
    }
}
console.log(checkForAnagrama(firstStr, secondStr));