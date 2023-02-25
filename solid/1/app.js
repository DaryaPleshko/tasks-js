// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
    constructor() {
        this.generateEvent();
    }

    generateEvent = () => {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const firstInp = document.querySelector('.first-inp').value,
                secondInp = document.querySelector('.second-inp').value;
            this.doPlus(firstInp, secondInp);
            this.doMinus(firstInp, secondInp);
            this.doMultiply(firstInp, secondInp);
            this.doDivide(firstInp, secondInp);
        })
    }

    doPlus = (firstInp, secondInp) => {
        const plus = document.querySelector('.plus');
        plus.innerHTML = `Сумма = ${+firstInp + +secondInp}`;
    }
    doMinus = (firstInp, secondInp) => {
        const minus = document.querySelector('.minus');
        minus.innerHTML = `Разность = ${+firstInp - +secondInp}`;
    }
    doMultiply = (firstInp, secondInp) => {
        const multiply = document.querySelector('.multiply');
        multiply.innerHTML = `Произведение = ${+firstInp * +secondInp}`;
    }
    doDivide = (firstInp, secondInp) => {
        const devide = document.querySelector('.devide');
        devide.innerHTML = `Деление = ${+firstInp / +secondInp}`;
    }
}
const domHtml = new DomHtml();