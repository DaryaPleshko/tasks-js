// Реализуйте класс Elem. В нем есть функция html, 
//принимающая строку, селектор. Необходимо отобазить на странице 

class Elem {
    html = (str, selector) => {
        const div = document.querySelector(selector)
        div.innerHTML = str;
    }
}

const elem = new Elem();
elem.html('hello', '.result');