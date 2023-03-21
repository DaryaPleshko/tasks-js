// Является ли слово палиндромом. Добавить проверки (как вы считаете какие проверки здесь необходимы?) 

const str = 'Анна'.toLowerCase().trim();
const checkOfStr = (str) => {
    if (isNaN(str)) return true;
    else throw new Error('Слово не является палиндромом');
};
const checkOfPalindrom = (str) => {
    try {
        checkOfStr(str)
        const strReverse = str.split('').reverse().join('');
        if (str != strReverse) throw new Error('Слово не является палиндромом');
        return true;
    } catch (err) {
        return err;
    }
};
console.log(checkOfPalindrom(str));
