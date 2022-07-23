//Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const btn = document.querySelector(`.btn`),
    arr = document.querySelector(`.array`),
    arrCh = document.querySelector(`.arr-ch`),
    arrNech = document.querySelector(`.arr-nech`);

let array = [];
let arrayChet = [];
let arrayNechet = [];

btn.addEventListener(`click`, () => {
    try { 
        const inp = document.querySelector(`.inp`).value;
        if (/^[0-9]+$/.test(inp)) {
            array.push(inp);
            arr.innerHTML = array;
            if (inp % 2 === 0) {
                arrayChet.push(inp);
                arrCh.innerHTML = arrayChet;
            } else {
                arrayNechet.push(inp);
                arrNech.innerHTML = arrayNechet;
            }
        } else throw new Error(`Вы ввели не число`)

    } catch (error) {
        alert(error.message);
    }
});