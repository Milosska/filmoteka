//<!-- Євген Чорний -->
// За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (local-storage);
// За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (local-storage);

function onModalBtnClick(movieObj) {
  const btnContEl = document.querySelector('.movie__buttons');
  const moviecard = document.querySelectorAll('.movie-card__img');
  const WATCHED_KEY = 'watched';
  const QUEUE_KEY = 'queue';
  let key = WATCHED_KEY;

  if (moviecard.length >= 1) {
    btnContEl.addEventListener('click', onBtnClick);
  }

  function onBtnClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    console.log('Hello!');

    if (evt.target.textContent.toUpperCase() === 'ADD TO QUEUE') {
      key = QUEUE_KEY;
    } else if (evt.target.textContent.toUpperCase() === 'ADD TO WATCHED') {
      key = WATCHED_KEY;
    }

    addToLS(movieObj, key);
  }

  function addToLS(movieObj, key) {
    const savedMovie = movieObj;
    let arrayToSaveMovies = [];
    let moviesSavedInLS = localStorage.getItem(key);
    if (!moviesSavedInLS) {
      arrayToSaveMovies.push(savedMovie);
      localStorage.setItem(key, JSON.stringify(arrayToSaveMovies));
      return;
    } else {
      moviesSavedInLS = JSON.parse(moviesSavedInLS);
      let map = moviesSavedInLS.map(movie => movie);
      map.pop(savedMovie);
      JSON.stringify(arrayToSaveMovies);
      if (moviesSavedInLS.length < 1) {
        localStorage.removeItem(key);
      }
    }
  }
}

export { onModalBtnClick };
