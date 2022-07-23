//Посчитать количество гласных и согласных в строке

const btn = document.querySelector(`.btn`),
    rezF = document.querySelector(`.rez1`),
    rezS = document.querySelector(`.rez2`);

btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`).value;
        let rez = 0;
        if (/^[a-zA-Z]+$/.test(inp)) {
            for (let i = 0; i < inp.length; i++) {
                if (inp[i] === `a` || inp[i] === `e` || inp[i] === `i` || inp[i] === `o` || inp[i] === `u`) rez += 1;
            };
            rezF.innerHTML += rez;
            rezS.innerHTML += inp.length - rez;
        } else throw new Error('Вы ввели число');
    } catch (error) {
        alert(error.message);
    }

});