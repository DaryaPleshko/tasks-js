// Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    checkArray = (array) => {
        let number = 0;
        for (let el of array) (!isNaN(el)) ? number += 1 : null;
        return (number === 0) ? true : false;
    }
    doHashtag = (n) => {
        try {
            if (isNaN(n)) throw new Error(`Некорректный ввод!`);
            let array = [];
            for (let i = 0; i < n; i++) array.push(prompt(``));
            this.checkArray(array);
            const added = array.map((el) => `#${el}`);
            return added;
        } catch (error) {
            return error.message;
        }
    }
}
const hashtag = new Hashtag();
console.log(hashtag.doHashtag(6));