// 1) Функція, що шукає фільми за ключовим словом - Олег;
import { fetchInfo, forParseGenres } from './components/fetch';
import cardsMarkupCreate from './components/card-render';
// import filmListMarkup from '../templates/film-card.hbs';
// import filmCardMarkup from '../templates/film-card-mark.hbs';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');
const messageEl = document.querySelector('.form__message--error');
const listFilm = document.querySelector('.main__list');
let currentPage = 1;
let query = '';

window.onload = function filmSearch() {
  if (!formEl) {
    return;
  }

  formEl.addEventListener('submit', onFormSumbmit);
};

function onFormSumbmit(evt) {
  evt.preventDefault();
  query = inputEl.value.trim();

  searchByQuery(query);
}

function searchByQuery(query) {
  fetchInfo('keyword', query, currentPage)
    .then(({ results }) => {
      if (results.length === 0) {
        messageEl.removeAttribute('hidden');
        return;
      }

      forParseGenres(results);
      listFilm.innerHTML = cardsMarkupCreate(results);
      messageEl.setAttribute('hidden', true);
    })
    .catch(err => {
      console.log(err);
    });
  currentPage += 1;
}

// if (res.length === 1) {
//   listFilm.insertAdjacentHTML('beforeend', filmCardMarkup(res));
//   return;
// }
// if (res.length >= 2 && res.length <= 10) {
//   listFilm.insertAdjacentHTML('beforeend', filmListMarkup(res));
//   return;
// }
