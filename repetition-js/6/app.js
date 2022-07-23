//При наведении на картинку изменять ее

const img = document.querySelector(`.img`);

img.addEventListener(`mouseover`, () => {
    img.style = `background-image: url(./2.jpg)`;
});

img.addEventListener(`mouseout`, () => {
    img.style = `background-image: url(./1.jpg)`;
});