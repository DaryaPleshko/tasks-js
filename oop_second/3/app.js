//Реализуйте класс Html. В нем функцию renderArr, принимающую селектор.
// Вам неоходимо отобразить цельный массив ['Minsk', 'Brest', 'Vitebsk']


class Html {
    renderArr = (array, selector) => {
        const arr = document.querySelector(selector)
        arr.innerHTML = array;
    }
}

const html = new Html();
html.renderArr(['Minsk', 'Brest', 'Vitebsk'], '.result');