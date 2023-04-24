'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');
const openPopupBtn = document.querySelector('.header__navigation-button');
const popupContainer = document.querySelector('.popup');
const popupBtn = document.querySelectorAll('.form-button');

//open popup
openPopupBtn.addEventListener('click', () => {
  popupContainer.classList.add('popup-open');
  body.classList.add('no-scrole');
});

//close popup
popupContainer.addEventListener('click', e => {
  if (e.target.classList.contains('popup')) {
    popupContainer.classList.remove('popup-open');
    body.classList.remove('no-scrole');
  }
});
