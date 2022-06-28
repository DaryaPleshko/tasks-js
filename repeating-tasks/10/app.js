// На вход подается строка в виде пути открытия файла, например, '/home/user/dir/file.txt'. Необходимо вернуть имя файла (подстрока после последнего символа "\" ) из полного пути к файлу('file.txt'). Если же пользователь ввел некорректный путь – исключение.  
//Путь считается некорректным, если:   1. В нем больше 1 файла не отделены знаком /   2. Конечный файл не содержит расширения 

const dir = `C:/Users/Hanna/Desktop/hschool_card/src/components/Questions.js`;
const checkOfDir = (str) => {
    if (!str.includes('/')) throw new Error(`В строке нет /`);
    if (!/^[a-zA-Z0-9\/:_ ]+\.[a-z]+$/g.test(str)) throw new Error(`нет расширения`);
    else return true;
};
const cutOfDir = (str) => {
    try {
        const bool = checkOfDir(str);
        const dirSplitOfSlesh = str.split('/');
        const last = dirSplitOfSlesh[dirSplitOfSlesh.length - 1];
        return last;
    } catch (err) {
        return err;
    }
}
console.log(cutOfDir(dir));