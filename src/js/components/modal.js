// <!-- Люда Даценко та Тетяна Крамаренко -->
import { onModalBtnClick } from './add-btn';
import filmMarkup from '../../templates/film-modal.hbs';
const Handlebars = require('handlebars');

const modalClose = document.querySelectorAll('.modal__close');
const myOverlay = document.querySelector('.overlay');
const modalTeam = document.querySelector('.modal__team');
const modalCard = document.querySelector('.modal__card');
const filmlist = document.querySelector('.main__list');
const teamLink = document.querySelector('.footer__link');

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

// btnModalFilm.addEventListener('click', onModalOpen);

function onModalOpen(event) {
  if (event.target === teamLink) {
    scrollController.disabledScroll();

    myOverlay.hidden = false;
    modalTeam.hidden = false;
    modalCard.hidden = true;
  }

  if (event.target.classList.contains('movie-card__img')) {
    scrollController.disabledScroll();

    myOverlay.hidden = false;
    modalCard.hidden = false;
    modalTeam.hidden = true;

    const modalWrapper = document.querySelector('.movie');
    let currentFilms = localStorage.getItem('current-films');
    let parsedFilms = JSON.parse(currentFilms);

    parsedFilms.forEach(film => {
      if (Number(film.id) === Number(event.target.dataset.id)) {
        Handlebars.registerHelper(
          'checkOverviewForNull',
          function (movieAbout) {
            return movieAbout
              ? movieAbout
              : 'Sorry, but review absent for this movie 😥';
          }
        );

        modalWrapper.innerHTML = filmMarkup(film);
        onModalBtnClick(film);
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hideAll();
      document.removeEventListener('keydown', onModalOpen);
    }
  });

  myOverlay.addEventListener('click', e => {
    if (e.target === myOverlay) {
      hideAll();
    }
  });
}

modalClose.forEach(btn => btn.addEventListener('click', hideAll));

function hideAll() {
  scrollController.enabledScroll();

  myOverlay.hidden = true;
  modalCard.hidden = true;
  modalTeam.hidden = true;
}
