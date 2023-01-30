// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const checkUrl = (url) => {
    try {
        if (!/^(https|http):\/\/[a-zA-Z]+\.[a-z]+\/[a-zA-Z]+$/g.test(url)) throw new Error(`Некорректный ввод`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(checkUrl(`https://github.com/DaryaPleshko`));