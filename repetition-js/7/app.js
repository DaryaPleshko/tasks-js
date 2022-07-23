//Вы вводите число. Необходимо вывести все числа кратные 3 до текущего
//значения числа

const btn = document.querySelector(`.btn`);

const resDom = document.querySelector(`.res`);
const result = [];
btn.addEventListener(`click`, () => {
    try {
        const input = document.querySelector(`.inp`).value;
        for (let i = 0; i < input; i++) {
            if (i % 3 === 0) result.push(i);
        }
        resDom.innerHTML = result;
    } catch (error) {
        alert(error.message);
    }
});