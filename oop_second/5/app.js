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
html.renderArr('.result', ['Minsk', 'Minsk', 'Minsk', 'Minsk', 'Brest', 'Brest', 'Vitebsk']);