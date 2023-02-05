// 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації - Ірина;
// 2) Функція, що шукає фільми за ключовим словом - Олег;

import { fetchInfo, forParseGenres } from './components/fetch.js';
import cardsMarkupCreate from './components/card-render';
import { createAPagination } from './pagination';
import spinner from './components/spinner.js';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');
const mainList = document.querySelector('.main__list');
const messageEl = document.querySelector('.form__message--error');
let currentPage = 1;
let query = '';

// Завантаження функцій тільки для сторінки HOME
window.onload = function renderPageMarkup() {
  if (window.location.href.includes('library')) {
    return;
  }

  formEl.addEventListener('submit', onFormSumbmit);

  clearMarkup();
  spinner.show();
  storeGenres();
  markupTrends();
};

// Завантаження жанрів у локальне сховище
function storeGenres() {
  fetchInfo('genres')
    .then(data => {
      localStorage.setItem('genres', JSON.stringify(data.genres));
    })
    .catch(error => console.log(error));
}

// Завантаження фільмів за трендами
function markupTrends(page = 1) {
  fetchInfo('trends', page)
    .then(data => {
      createAPagination(data);
      resultProcessing(data.results);
    })
    .catch(error => console.log(error));
}

// Обробка події сабміта
function onFormSumbmit(evt) {
  evt.preventDefault();
  query = inputEl.value.trim();

  searchByQuery(query);
}

// Пошук фільмів за ключовим словом
function searchByQuery(query) {
  fetchInfo('keyword', query, currentPage)
    .then(({ results }) => {
      if (results.length === 0) {
        messageEl.removeAttribute('hidden');
        return;
      }

      resultProcessing(results);
      messageEl.setAttribute('hidden', true);
    })
    .catch(err => {
      console.log(err);
    });
  currentPage += 1;
}

// Обробка масиву даних (внесення в локальне сховище, парс жанрів та відмальовка розмітки)
function resultProcessing(array) {
  localStorage.setItem('current-films', JSON.stringify(array));
  forParseGenres(array);
  mainList.innerHTML = cardsMarkupCreate(array);
  spinner.hide();
}

// Очищує розмітку (зокрема при перезавантаженні сторінки)
function clearMarkup() {
  mainList.innerHTML = '';
}

function reloadOnPageChange(page) {
  markupTrends(page);
}

export { renderPageMarkup, reloadOnPageChange, clearMarkup, searchByQuery };
