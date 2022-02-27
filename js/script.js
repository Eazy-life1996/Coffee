let btn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

btn.addEventListener("click", function () {
  menu.classList.toggle('active');
  btn.classList.toggle('active-btn');
});