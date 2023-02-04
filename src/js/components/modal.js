// <!-- Люда Даценко та Тетяна Крамаренко -->
const filmlist = document.querySelector('.main__list');
const teamLink = document.querySelector('.footer__link');
const modalClose = document.querySelector('.modal__close');
const myOverlay = document.querySelector('.overlay');
const modalTeam = document.querySelector('.modal__team');
const modalCard = document.querySelector('.modal__card');

teamLink.addEventListener('click', onModalOpen);
filmlist.addEventListener('click', onModalOpen);

// btnModalFilm.addEventListener('click', onModalOpen);

function onModalOpen(event) {
  if (event.target === teamLink) {
    myOverlay.hidden = false;
    modalTeam.hidden = false;
    modalCard.hidden = true;
  }

  if (event.target.classList.contains('movie-card__img')) {
    myOverlay.hidden = false;
    modalCard.hidden = false;
    modalTeam.hidden = true;
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hideAll();
    }
  });
  myOverlay.addEventListener('click', () => {
    hideAll();
  });
  modalClose.addEventListener('click', () => {
    hideAll();
  });
}

function hideAll() {
  myOverlay.hidden = true;
  modalCard.hidden = true;
  modalTeam.hidden = true;
}
