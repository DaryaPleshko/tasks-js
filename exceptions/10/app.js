// На вход подается строка в виде url. Необходимо прописать регулярное выражение для данной строки. Если же строка подходит под наше регулярное выражение, то вывести булевое true, в противном случае бросить исключение и его обработать.

const url = 'https://russianblogs.com';
const checkOfUrl = (str) => {
    try {
        if (/^(http|https):\/\/[a-zA-Z]+\.[a-z]+$/g.test(str)) return true;
        else throw new Error('не url')
    } catch (err) {
        return err;
    }
}
console.log(checkOfUrl(url));