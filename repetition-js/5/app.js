//У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов

const btn = document.querySelector(`.btn`),
    res = document.querySelector(`.res0`);

btn.addEventListener(`click`, () => {
    const inp0 = document.querySelector(`.input0`).value,
        inp1 = document.querySelector(`.input1`).value,
        inp2 = document.querySelector(`.input2`).value;
        const resVar = `${inp0}${inp1}${inp2}`;
    res.innerHTML = `Cancat: ${resVar}`;
});