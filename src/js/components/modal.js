// Функціонал модального вікна та відображення статусу фільмів на кнопках

import { onModalBtnClick, toggleBtnText } from './add-btn';
import filmMarkup from '../../templates/film-modal.hbs';

const Handlebars = require('handlebars');

// Елементи, де лежать модалки
const teamLink = document.querySelector('.footer__link');
const filmlist = document.querySelector('.main__list');
// Складові модалок
const myOverlay = document.querySelector('.overlay');
const modalTeam = document.querySelector('.modal__team');
const modalCard = document.querySelector('.modal__card');
const modalClose = document.querySelectorAll('.modal__close');

// Скролл
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY; //щоб не підскакувало вверх при закритті модалки

    // забороняємо скрол
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = ''; //----Дозволяємо скрол
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};

teamLink.addEventListener('click', onModalOpen);
filmlist.addEventListener('click', onModalOpen);

// Колбек-функція
function onModalOpen(event) {
  // 1) Модалка у футері
  if (event.target === teamLink) {
    scrollController.disabledScroll();
    addHiddenAtribute(modalCard);
  }

  // 2) Модалка з фільмом
  if (event.target.classList.contains('movie-card__img')) {
    scrollController.disabledScroll();
    addHiddenAtribute(modalTeam);

    const modalWrapper = document.querySelector('.movie');
    let currentFilms = localStorage.getItem('current-films');
    let parsedFilms = JSON.parse(currentFilms);

    parsedFilms.forEach(film => {
      // Перевірка на відповідність фільма
      if (Number(film.id) !== Number(event.target.dataset.id)) {
        return;
      }

      // Плейсхолдер для секції "About"
      Handlebars.registerHelper('checkOverviewForNull', function (movieAbout) {
        return movieAbout
          ? movieAbout
          : 'Sorry, but review absent for this movie 😥';
      });

      // join genres from array to one string
      Handlebars.registerHelper('joinGenres', function (genresArray) {
        if (genresArray.length === 0) {
          return 'genre is not available';
        }
        return genresArray.join(',');
      });

      // transform rate from 7.948 to 7.9
      Handlebars.registerHelper('truncRate', function (voteString) {
        const truncatedString = voteString
          ? (Math.round(parseFloat(voteString) * 10) / 10).toString()
          : 'n/a';

        return truncatedString.length === 1
          ? truncatedString + '.0'
          : truncatedString;
      });

      // Відмальовка начинки модалки
      modalWrapper.innerHTML = filmMarkup(film);

      // Активація стану кнопок
      activateModalBtnStatus(film);

      // Підключення функціоналу кнопок
      onModalBtnClick(film);
    });
  }

  // Закриття модалки та зняття прослуховувача з клавіші 'Escape'
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hideAll();
      document.removeEventListener('keydown', onModalOpen);
    }
  });

  // Закриття модалки при кліку на оверлей
  myOverlay.addEventListener('click', e => {
    if (e.target === myOverlay) {
      hideAll();
    }
  });
}

// Закриття модалки при кліку на "хрестик"
modalClose.forEach(btn => btn.addEventListener('click', hideAll));

// Функція, що відповідає за активацію скролу та приховування елементів модалок
function hideAll() {
  scrollController.enabledScroll();
  addHiddenAtribute(myOverlay, modalCard, modalTeam);
}

// Функція, що додає/знімає hidden-атрибути
// ---- у якості аргументу передавати елементи, що треба сховати!
function addHiddenAtribute(elem) {
  const elemArray = [myOverlay, modalCard, modalTeam];

  elemArray.forEach(element => {
    if (element === elem) {
      element.hidden = true;
    } else {
      element.hidden = false;
    }
  });
}

// Функція, що відображає статус фільма на кнопках модалки
function activateModalBtnStatus(film) {
  const keys = ['watched', 'queue'];

  keys.forEach(key => {
    const btnEl = document.querySelector(`.movie-btn__btn--${key}`);
    const LSMoviesArray = JSON.parse(localStorage.getItem(key));

    if (!LSMoviesArray) {
      return;
    }

    LSMoviesArray.forEach(movie => {
      if (movie.id === film.id) {
        btnEl.classList.add('is-active');
        toggleBtnText(btnEl, key);
      }
    });
  });
}
