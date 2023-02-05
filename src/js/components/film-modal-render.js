import markupContentModal from '../../templates/film-modal.hbs';
const gallery = document.querySelector('#movies-gallery-container');
const body = document.querySelector('body');
const modalWindow = document.querySelector('.modal-one-film');
const oneFilmOwerlay = document.querySelector('.modal-one-film__overlay');
const queue = document.querySelector('.queue');
const watched = document.querySelector('.watched');
const moviesGallery = document.querySelector('.home-container');

const wrapper = document.querySelector('.div-wrapper');

gallery.addEventListener('click', openModalWindow);
oneFilmOwerlay.addEventListener('click', closeFilmModal);

function initModalHandlers() {
  const watchBtn = document.querySelector('.add-to-watched');
  watchBtn.addEventListener('click', addToWatched);
  const queueBtn = document.querySelector('.add-to-queue');
  queueBtn.addEventListener('click', addToQueue);
}

function openModalWindow(evt) {
  const fetchedMoviesList = JSON.parse(
    localStorage.getItem('fetched-movies-array')
  );
  const watchedMoviesList = JSON.parse(localStorage.getItem('watched'));
  const queueMoviesList = JSON.parse(localStorage.getItem('queue'));
  const movie_id = evt.target.attributes['data-action'].nodeValue;
  const movieExistsInWatched = watchedMoviesList.find(
    movie => movie.id === +movie_id
  );
  const movieExistsInQueue = queueMoviesList.find(
    movie => movie.id === +movie_id
  );
  const isWatchedListHide = watched.classList.contains('isHide');
  const isQueueListHide = queue.classList.contains('isHide');
  const isHomeHide = moviesGallery.classList.contains('isHide');

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  contentHidden();

  if (!isQueueListHide) {
    const movieInfo = queueMoviesList.find(movie => movie.id === +movie_id);
    const markup = markupContentModal(movieInfo);
    wrapper.insertAdjacentHTML('afterbegin', markup);
  }
  if (!isWatchedListHide) {
    const movieInfo = watchedMoviesList.find(movie => movie.id === +movie_id);
    const markup = markupContentModal(movieInfo);
    wrapper.insertAdjacentHTML('afterbegin', markup);
  }
  if (!isHomeHide) {
    const movieInfo = fetchedMoviesList.find(movie => movie.id === +movie_id);
    const markup = markupContentModal(movieInfo);
    wrapper.insertAdjacentHTML('afterbegin', markup);
  }

  initModalHandlers();

  const addToWatchedBtn = document.querySelector('.add-to-watched');
  const addToQueueBtn = document.querySelector('.add-to-queue');

  if (movieExistsInWatched) {
    addToWatchedBtn.innerHTML = 'Remove from watched';
    addToWatchedBtn.classList.add('isActive');
  }

  if (movieExistsInQueue) {
    addToQueueBtn.innerHTML = 'Remove from queue';
    addToQueueBtn.classList.add('isActive');
  }

  modalWindow.classList.add('open');
}

function closeFilmModal() {
  modalWindow.classList.remove('open');
  wrapper.innerHTML = '';
  body.classList.remove('content-hidden');
}

// заборона листати контент за модалкою
function contentHidden() {
  body.classList.add('content-hidden');
}
