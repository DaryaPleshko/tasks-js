//Необходимо отобразить кнопку с надписью «Нажми на меня» 
//и инпут со значением по-умолчанию «???». По клику на кнопку заменить значение инпута на «!!!»

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => document.querySelector('.inp').value='!!!');


