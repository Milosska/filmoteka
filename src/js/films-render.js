// 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації;
// 2) Функція фетча за трендами
// 3) Функція, що шукає фільми за ключовим словомг;

import { fetchInfo, forParseGenres } from './components/fetch.js';
import cardsMarkupCreate from './components/card-render';
import { createAPagination } from './pagination';
import spinner from './components/spinner.js';
import popcornPlugAnimation from './components/popcorn-plug';
import toggleTheme from './toggle-theme';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');
const mainList = document.querySelector('.main__list');
const messageEl = document.querySelector('.form__message--error');
let popcornPlugEl;
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
  searchByQuery();
};

// Завантаження жанрів у локальне сховище
function storeGenres() {
  fetchInfo('genres')
    .then(data => {
      localStorage.setItem('genres', JSON.stringify(data.genres));
    })
    .catch(error => console.log(error));
}

// Обробка події сабміта
function onFormSumbmit(evt) {
  evt.preventDefault();
  query = inputEl.value.trim();
  currentPage = 1;
  searchByQuery(query);
}

// Пошук фільмів за ключовим словом
function searchByQuery(query) {
  spinner.show();
  if (!query) {
    fetchInfo('trends', currentPage)
      .then(data => {
        resultProcessing(data.results);
        createAPagination(data);
        toggleTheme();
      })
      .catch(error => console.log(error));
    return;
  }

  fetchInfo('keyword', query, currentPage)
    .then(data => {
      if (data.results.length === 0) {
        messageEl.removeAttribute('hidden');
        window.setTimeout(timeoutMessageEl, 2000);
        searchByQuery();
        return;
      }
      resultProcessing(data.results);
      createAPagination(data);
      toggleTheme();
    })
    .catch(err => {
      console.log(err);
    });
  spinner.hide();
}

// Сповіщення про помилку і перехід на тренди
function timeoutMessageEl() {
  messageEl.setAttribute('hidden', true);
}

// Обробка масиву даних (внесення в локальне сховище, парс жанрів та відмальовка розмітки)
function resultProcessing(array) {
  forParseGenres(array);
  localStorage.setItem('current-films', JSON.stringify(array));

  // Якщо кліькість фільмів, які потрібно відмалювати дорівнює 20 тоді:
  if (array.length === 20) {
    mainList.innerHTML = cardsMarkupCreate(array, true); // відмальовуємо заглушку-попкорн
    popcornPlugEl = document.querySelector('.popcorn-plug');
    popcornPlugEl.addEventListener('click', popcornPlugAnimation);
  } else {
    mainList.innerHTML = cardsMarkupCreate(array, false); // інакше не відмальовуємо заглушку-попкорн
  }
  toggleTheme();
  spinner.hide();
}

// Очищує розмітку (зокрема при перезавантаженні сторінки)
function clearMarkup() {
  mainList.innerHTML = '';
}

// Функція переходу на тренди
function reloadOnPageChange(page) {
  currentPage = page;
  searchByQuery(query);
}

export { renderPageMarkup, reloadOnPageChange, clearMarkup, searchByQuery };
