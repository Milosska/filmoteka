// 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації - Ірина;

import { fetchInfo } from './fetch.js';
import cardsMarkupCreate from './card-render';

const mainList = document.querySelector('.main__list');
// const formBtn = document.querySelector('.form__btn');

// formBtn.addEventListener('click', renderPageMarkup);
// window.addEventListener('keydown', onEnterPress);

window.onload = function renderPageMarkup() {
  clearMarkup();
  storeGenres();
  markupTrends();
};

function reloadOnPageChange(page) {
  // 1)Додати прослуховувач подій на кнопку, що відповідає за зміну сторінки;
  // 2) Зчитати номер сторінки з кнопки;
  // 3) Передати цей номер у функцію markupTrends.
}

function markupTrends(page = 1) {
  fetchInfo('trends', 1)
    .then(data => {
      localStorage.setItem('current-films', JSON.stringify(data.results));
      const markup = cardsMarkupCreate(data.results);
      mainList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}

function storeGenres() {
  fetchInfo('genres')
    .then(data => {
      localStorage.setItem('genres', JSON.stringify(data.genres));
    })
    .catch(error => console.log(error));
}

function clearMarkup() {
  mainList.innerHTML = '';
}

export { renderPageMarkup };
