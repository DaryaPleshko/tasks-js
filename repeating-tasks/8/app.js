// На вход подается строка в виде url. Необходимо прописать регулярное выражение для данной строки.
// Если же строка подходит под наше регулярное выражение, то вывести булевое true, в противном случае бросить исключение и его обработать. 

const newAdress = 'https://russianblogs.com';
const checkNewAdress = (str) => {
    try {
        if (/^https\:\/\/[a-zA-Z0-9]+\.[a-z]+$/g.test(str)) return true;
        else throw new Error('not found');
    } catch (err) {
        return err;
    }
}