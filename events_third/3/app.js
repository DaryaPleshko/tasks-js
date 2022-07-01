//Добавьте совершенно любую картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то возвращается первая картинка

const img = document.querySelector('.img');

img.addEventListener('mouseover', () => {
    img.style = `background-image: url(./2.jpg);
    width: 200px;
    height: 200px;
    background-size:cover ;`
});


img.addEventListener('mouseout', () => {
    img.style = `background-image: url(./1.jpg);
    width: 200px;
    height: 200px;
    background-size:cover ;`
});