// Функціонал рендеру карток з фільмами на сторінці "MY LIBRARY"
import cardsMarkupCreate from './components/card-render';
import emptyLS from '../templates/empty-library.hbs';
import toggleTheme from './toggle-theme';

const btn = document.querySelector('.header-library__btn');
const mainList = document.querySelector('.main__list');
const KEYS = ['watched', 'queue'];

// Визначення ключа при першому завантаженні
let currentKey = JSON.parse(localStorage.getItem('KEYNAME'));
if (!currentKey) {
  currentKey = 'watched';
}

// Прослуховування події тільки на сторінці "MY LIBRARY"
if (window.location.href.includes('library')) {
  btn.addEventListener('click', onLibraryBtn);

  // Відмальовка сторінки при першому завантаженні
  addIsActiveClass();
  getMoviesFromLS(currentKey);
}

// Колбек-функція
function onLibraryBtn(evt) {
  // ----- Перевірка натискання на кнопку
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  // ----- Обирання ключа
  KEYS.forEach(key => {
    if (evt.target.textContent.toLowerCase().includes(`${key}`)) {
      currentKey = key;
      localStorage.setItem('KEYNAME', JSON.stringify(currentKey));
    }
  });

  addIsActiveClass();
  getMoviesFromLS(currentKey);
}

// Функція, що присвоює клас is-active
function addIsActiveClass() {
  const buttons = btn.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent.toLowerCase().includes(`${currentKey}`)) {
      button.classList.add('is-active');
    } else {
      button.classList.remove('is-active');
    }
  });
}

// Функція рендеру розмітки фільмів
function getMoviesFromLS(currentKey) {
  const moviesArray = JSON.parse(localStorage.getItem(currentKey));
  // ----- Якщо сховище пусте
  if (!moviesArray || moviesArray.length < 1) {
    mainList.innerHTML = emptyLS();
  } else {
    // ----- Якщо не пусте
    const markup = cardsMarkupCreate(moviesArray);
    mainList.innerHTML = markup;
  }
  toggleTheme();
}
