// У вас есть класс Fibonacci. Создать в нем функцию для вывода ряда фибоначчи. Проверки 

class Fibonacci {
    constructor(febLength) {
        this.febLength = febLength;
    }

    checkFebNumb = () => {
        if (!Number.isInteger(this.febLength)) throw new Error('Не число');
        if (this.febLength <= 0) throw new Error('Некорректное значение')
        return true;
    }

    doFebSer = () => {
        try {
            const arrToRet = [];
            if (this.checkFebNumb()) {
                for (let i = 0; i < this.febLength; i++) {
                    if (i === 0 || i === 1) arrToRet.push(i);
                    else arrToRet.push(arrToRet[i - 1] + arrToRet[i - 2]);
                }
                return arrToRet;
            }
        } catch (err) {
            return err.message;
        }

    }
}

const showFeb = new Fibonacci(8);
console.log(showFeb.doFebSer());
