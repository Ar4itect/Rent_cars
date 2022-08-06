'use strict';
document.getElementById('main-action').onclick = function() {
   document.getElementById('cars').scrollIntoView( {behavior: "smooth"});
}

let buttons = document.getElementsByClassName('car-button');
for (let i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function() {
      document.getElementById('price').scrollIntoView({ behavior: "smooth" });
   }
}

document.getElementById('price-action').onclick = function () {
   if (document.getElementById('name').value === '') {
      alert('Заполните поле имя!');
   } else if (document.getElementById('phone').value === '') {
      alert('Заполните поле телефон!');
   } else if (document.getElementById('car').value === '') {
      alert('Заполните поле автомобиль!');
   } else {
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время!');
   }
}

//автомобиль изменяет свою позицию при перемещении курсора мыши в разные стороны по осям X и Y
document.addEventListener("DOMContentLoaded", function () {
   let layer = document.querySelector('.price-image');
   document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 10) + 'px,' + ((event.clientY * 0.4) / 10) + 'px,0px)';
   });

//на главном экране фон передвигается при скроллинге страницы (картинка с автомобилем смещается вправо при скроллинге вниз)
   const elem = document.querySelector(".main");
   document.addEventListener('scroll', () => {
      elem.style.backgroundPositionX = '0' + (0.7 * window.pageYOffset) + 'px';
   })
});