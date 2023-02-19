// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(firstNum, secomdNum) {
        this.firstNum = firstNum;
        this.secomdNum = secomdNum;
        this.isValid();
    }

    isValid = () => { if (isNaN(this.firstNum) || isNaN(this.secomdNum)) throw new Error(`Некорректный ввод`); }
    summa = () => {
        try {
            this.isValid();
            return `Сумма = ${this.firstNum + this.secomdNum}`;
        } catch (error) {
            return error.message;
        }
    }
    raznost = () => {
        try {
            this.isValid();
            return `Разность = ${this.firstNum - this.secomdNum}`;
        } catch (error) {
            return error.message;
        }
    }
    proizvedenie = () => {
        try {
            this.isValid();
            return `Произведение =${this.firstNum * this.secomdNum}`;
        } catch (error) {
            return error.message;
        }
    }
    chastnoe = () => {
        try {
            this.isValid();
            return `Частное = ${this.firstNum / this.secomdNum}`;
        } catch (error) {
            return error.message;
        }
    }
}

const calculator = new Calculator(4, 3);
console.log(calculator.summa());
console.log(calculator.raznost());
console.log(calculator.proizvedenie());
console.log(calculator.chastnoe());