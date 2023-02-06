//<!-- Іван  -->
// 1) За натисканням на кнопку "Watched" показуються переглянуті фільми користувача
// 2) За натисканням на кнопку "Queue" показуються фільми додані в чергу користувача
import cardsMarkupCreate from './components/card-render';

const btn = document.querySelector('.header-library__btn');
const mainList = document.querySelector('.main__list');
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
let currentKey = WATCHED_KEY;

if (window.location.href.includes('library')) {
  btn.addEventListener('click', onLibraryBtn);
}

getMoviesFromLS(currentKey);

function onLibraryBtn(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  if (evt.target.textContent.toUpperCase() === 'QUEUE') {
    currentKey = QUEUE_KEY;
    btn.lastElementChild.classList.add('is-active');
    btn.firstElementChild.classList.remove('is-active');
  } else if (evt.target.textContent.toUpperCase() === 'WATCHED') {
    currentKey = WATCHED_KEY;
    btn.firstElementChild.classList.add('is-active');
    btn.lastElementChild.classList.remove('is-active');
  }
  getMoviesFromLS(currentKey);
}

function getMoviesFromLS(currentKey) {
  const storage = localStorage.getItem(currentKey);
  if (storage === null) {
    mainList.innerHTML = '';
    console.log('Nothing is added to the library');
  } else {
    try {
      const moviesArray = JSON.parse(storage);
      const markup = cardsMarkupCreate(moviesArray);
      mainList.innerHTML = markup;
    } catch (error) {
      console.log(error);
    }
  }
}
