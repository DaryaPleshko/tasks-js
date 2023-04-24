//Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. 
//По клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => alert(document.querySelector('.inp').value));