'use strict';

window.addEventListener('DOMContentLoaded', () => {

  let btn = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__menu');
  const wrapper = document.querySelector('.product__slider');
  const input = document.querySelectorAll('.product__input');
  const btnPlus = document.querySelectorAll('.product__plus');
  const btnMinus = document.querySelectorAll('.product__minus');

  btn.addEventListener("click", function () {
    menu.classList.toggle('active');
    btn.classList.toggle('active-btn');
  });

  function getInputNumber() {

      btnPlus.forEach((item, i) => {
        item.addEventListener('click', () => {
          input[i].value = parseInt(input[i].value) + 1;
        });
      });

    btnMinus.forEach((item, i) => {
      item.addEventListener('click', () => {
        input[i].value = input[i].value > 0 ? parseInt(input[i].value) - 1 : 0;
      });
    });
  }

  getInputNumber();
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