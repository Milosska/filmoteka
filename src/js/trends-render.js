// 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації - Ірина;

import { fetchInfo, forParseGenres } from './components/fetch.js';
import cardsMarkupCreate from './components/card-render';
import { createAPagination } from './pagination';

const mainList = document.querySelector('.main__list');

window.onload = function renderPageMarkup() {
  if (window.location.href.includes('library')) {
    return;
  }
  clearMarkup();
  storeGenres();
  markupTrends();
};

function reloadOnPageChange(page) {
  markupTrends(page);
}

function markupTrends(page = 1) {
  fetchInfo('trends', page)
    .then(data => {
      createAPagination(data);
      localStorage.setItem('current-films', JSON.stringify(data.results));
      forParseGenres(data.results);
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

export { renderPageMarkup, reloadOnPageChange, clearMarkup };
