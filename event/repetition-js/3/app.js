// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// маассив строчкой ниже, в котором находится каждый 2 элемент
// первоначального массива


const btn = document.querySelector(`.btn`);
const arrDOM = document.querySelector(`.arr`);
const result = document.querySelector(`.result`);

let result_arr = [];
let arr = [];

btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`).value;
        arr.push(inp);
        arrDOM.innerHTML = arr;

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 != 0) result_arr.push(arr[i]);
        }
        result.innerHTML = result_arr;
        result_arr = [];
    } catch (error) {
        alert(error.message);
    }
});