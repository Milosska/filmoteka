//<!-- Євген Чорний   -->
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
    if (
      evt.target.textContent.toUpperCase() === 'ADD TO QUEUE' ||
      evt.target.textContent.toUpperCase() === 'REMOVE FROM QUEUE'
    ) {
      key = QUEUE_KEY;
    } else if (
      evt.target.textContent.toUpperCase() === 'ADD TO WATCHED' ||
      evt.target.textContent.toUpperCase() === 'REMOVE FROM WATCHED'
    ) {
      key = WATCHED_KEY;
    }
    if (evt.target.classList.contains('is-active')) {
      removeToLS(movieObj, key);
    } else {
      addToLS(movieObj, key);
    }
    // LS check
    evt.target.classList.toggle('is-active');
    toggleBtnText(evt.target, key);
    // try set class
  }
  // Функція, що додає фільм до локального сховища
  function addToLS(movieObj, key) {
    let moviesSavedInLS = localStorage.getItem(key);
    if (!moviesSavedInLS) {
      let filmArray = [];
      filmArray.push(movieObj);
      localStorage.setItem(key, JSON.stringify(filmArray));
      return;
    }
    let parcedMovies = JSON.parse(moviesSavedInLS);
    // Перевірка на наявність фільму в листах
    let sameMoviesArray = [];
    parcedMovies.forEach(movie => {
      if (movie.id === movieObj.id) {
        sameMoviesArray.push(movie);
        // Дописати повідомлення "This movie is already in the watched/gueue list"
        return;
      }
    });
    if (sameMoviesArray.length >= 1) {
      return;
    }
    // Кінець перевірки
    parcedMovies.unshift(movieObj);
    localStorage.setItem(key, JSON.stringify(parcedMovies));
  }
  // Функція, що забирає фільм з локального сховища
  function removeToLS(movieObj, key) {
    let moviesSavedInLS = localStorage.getItem(key);
    let parcedMovies = JSON.parse(moviesSavedInLS);
    if (!parcedMovies) {
      return;
    }
    let renewedMoviesArray = [];
    parcedMovies.forEach(movie => {
      if (movie.id !== movieObj.id) {
        renewedMoviesArray.push(movie);
      }
    });
    localStorage.setItem(key, JSON.stringify(renewedMoviesArray));
  }
}

// Функція, що змінює текстовий контент кнопок
function toggleBtnText(btn, key) {
  if (btn.classList.contains('is-active')) {
    btn.textContent = `Remove from ${key}`;
  } else {
    btn.textContent = `Add to ${key}`;
  }
}

export { onModalBtnClick, toggleBtnText };
