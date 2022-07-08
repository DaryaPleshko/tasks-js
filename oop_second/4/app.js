//Дополнить 3. Значения массива отображать одиз
// за одним через appendChild  5. Добавить скролл к 4 заданию


class Html {
    renderArr = (selector, array) => {
        const innerDiv = document.querySelector(selector)
        for (let i = 0; i < array.length; i++) {
            const p = document.createElement(`p`);
            p.className = `element${i}`
            innerDiv.appendChild(p)
            document.querySelector(`.element${i}`).innerHTML = array[i]
        }
    }
}

const html = new Html();
html.renderArr('.result', ['Minsk', 'Brest', 'Vitebsk']);