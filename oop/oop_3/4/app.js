// Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {
    constructor(number) {
        this.number = number;
    }

    isValid = () => {
        if (isNaN(this.number)) throw new Error(`Некорректный ввод`);
        return true;
    }

    doArray = () => {
        try {
            this.isValid();
            let array = [],
                summa = 0;
            for (let i = 0; i < this.number; i++)array.push(Math.floor(Math.random() * 100));
            for (let i = 0; i < array.length; i++) if (array[i] % 2 === 0) summa += array[i];
            return `Массив = [${array}], Сумма четных чисел = ${summa}`;
        } catch (error) {
            return error.message;
        }
    }
}

const mathСalculation = new MathСalculation(6);
console.log(mathСalculation.doArray());