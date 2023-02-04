// 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації - Ірина;

import { fetchInfo } from './fetch.js';
import cardsMarkupCreate from './card-render';

const mainList = document.querySelector('.main__list');

const formBtn = document.querySelector('.form__btn');
formBtn.addEventListener('click', renderPageMarkup);
window.addEventListener('keydown', onEnterPress);
// https://api.themoviedb.org/3/trending/movie/day?api_key=51114562faac57108ae3113fba230ec4&page=2

function renderPageMarkup(evt, query, page = 1) {
  clearMarkup();

  fetchInfo('keyword', query, page)
    .then(data => {
      localStorage.setItem('current-films', JSON.stringify(data.results));

      const markup = cardsMarkupCreate(data.results);

      mainList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => onFetchError());
}

function onEnterPress(evt) {
  if (evt.code === 'Enter') {
    renderPageMarkup();
  }
}

function clearMarkup() {
  mainList.innerHTML = '';
}

function onFetchError() {
  console.log(error);
}

export { renderPageMarkup };
