// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод.

class Anagram {
    constructor(firstStr, secondStr) {
        this.firstStr = firstStr;
        this.secondStr = secondStr;
    }
    checkForAnagrama = () => {
        const splitFirstStr = this.firstStr.split(''),
            splitSecondStr = this.secondStr.split('');
        let anograma = 0;
        if (splitFirstStr.length === splitSecondStr.length) {
            for (let i = 0; i < splitFirstStr.length; i++) {
                (splitFirstStr.includes(splitSecondStr[i])) ? anograma += 1 : null;
            }
            return (anograma === splitFirstStr.length) ? true : false;
        } else return `Не анограммы`;
    }
}
const anagram = new Anagram(`конус`, `сукно`);
console.log(anagram.checkForAnagrama())