//<!-- Євген Чорний -->
// За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (local-storage);
// За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (local-storage);

const btn1 = document.querySelector('.btn__watched');
// btn1.addEventListener('click', addToWatchedLS);

function addToWatchedLS() {
  addToLS(movieObj, key);
}

// queue
// watched

let movieObj;
let key = 'watched';

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
