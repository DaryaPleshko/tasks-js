// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const checkStr = (str) => {
    try {
        if (!/^[0-9]+$/g.test(str)) throw new Error(`Вы ввели строку`); 
        return true;
    } catch (error) {
        return error.message
    }
}
console.log(checkStr(`98290`));