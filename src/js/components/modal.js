// <!-- Люда Даценко та Тетяна Крамаренко -->
const filmlist = document.querySelector('.main__list');
const teamLink = document.querySelector('.footer__link');
const modalClose = document.querySelector('.modal__close');
const myOverlay = document.querySelector('.overlay');
const modalTeam = document.querySelector('.modal__team');
const modalCard = document.querySelector('.modal__card');

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
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hideAll();
      document.removeEventListener('keydown', onModalOpen);
    }
  });

  myOverlay.addEventListener('click', e => {
    if (e.target == myOverlay) {
      hideAll();
    }
  });
  modalClose.addEventListener('click', hideAll);
}

function hideAll() {
  scrollController.enabledScroll();

  myOverlay.hidden = true;
  modalCard.hidden = true;
  modalTeam.hidden = true;
}
