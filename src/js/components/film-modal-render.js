// <!-- Алекс Гусляков -->
// 1) Функція, що рендерить шаблон модалки одного фільму;
// 2) Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм

//Виклик шаблону hbs:
// import filmMarkup from '../../templates/film-modal.hbs';
// Алекс Гусляков
// 1) Функція, що рендерить шаблон модалки одного фільму;
// 2) Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм

// import filmMarkup from '../../templates/film-modal.hbs';
// import fetchInfo from './fetch';
// const body = document.querySelector('body');
// const modalWindow = document.querySelector('.modal-one-film');
// const fetchInfo = document.querySelector('.home-container');

function closeFilmModal() {
  modalWindow.classList.remove('open');
  wrapper.innerHTML = '';
  body.classList.remove('content-hidden');
}

// заборона листати контент за модалкою
function contentHidden() {
  body.classList.add('content-hidden');
}
