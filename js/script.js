let btn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

btn.addEventListener("click", function () {
  menu.classList.toggle('active');
  btn.classList.toggle('active-btn');
});

let btnForInput = document.querySelector('.header__button');
let inputSearch = document.querySelector('.header__input');

btnForInput.addEventListener("click", function () {
  inputSearch.classList.toggle('header__input--active');
});

$(document).ready(function () {
  $('.product__slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});