//<!-- Іван -->
// 1) За натисканням на кнопку "Watched" показуються переглянуті фільми користувача
// 2) За натисканням на кнопку "Queue" показуються фільми додані в чергу користувача
import cardsMarkupCreate from './components/card-render';

const btn = document.querySelector('.header-library__btn');
const mainList = document.querySelector('.main__list');
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
let currentKey = WATCHED_KEY;

// btn.addEventListener('click', onLibraryBtn);

function onLibraryBtn(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  if (evt.target.textContent.toUpperCase() === 'QUEUE') {
    currentKey = QUEUE_KEY;
  } else if (evt.target.textContent.toUpperCase() === 'WATCHED') {
    currentKey = WATCHED_KEY;
  }
  const storage = localStorage.getItem(currentKey);
  if (storage === null) {
    console.log('Nothing added to the library. Local storage is empty');
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
