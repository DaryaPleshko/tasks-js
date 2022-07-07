//У вас есть класс MathСalculation. Создать в нем функцию
// для подсчета всех положительных чисел. Проверки

class MathСalculation {
    constructor(array) {
        this.array = array;
    }

    validator = () => {
        if (!Array.isArray(this.array)) throw new Error('Это не массив');
        if (this.array.length === 0) throw new Error('Пустая строка');
        let str = 0;
        for (let key of this.array) if (isNaN(key)) str += 1;
        if (str > 0) throw new Error('Есть строки');
        return true;
    }

    positiveNumber = () => {
        try {
            if (this.validator()) return this.array.filter((el) => el > 0);
        } catch (error) {
            return error.message;
        }
    }
}

const mathСalculation = new MathСalculation([1, 2, -1, -2, 3, -3]);
console.log(mathСalculation.positiveNumber());