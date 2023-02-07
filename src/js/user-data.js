// Функціонал рендеру карток з фільмами на сторінці "MY LIBRARY"
import cardsMarkupCreate from './components/card-render';

const btn = document.querySelector('.header-library__btn');
const mainList = document.querySelector('.main__list');
const KEYS = ['watched', 'queue'];

// Прослуховування події тільки на сторінці "MY LIBRARY"
if (window.location.href.includes('library')) {
  btn.addEventListener('click', onLibraryBtn);
}

// Відмальовка сторінки при першому завантаженні
let currentKey = JSON.parse(localStorage.getItem('KEYNAME'));
if (!currentKey) {
  currentKey = 'watched';
}
addIsActiveClass();
getMoviesFromLS(currentKey);

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
