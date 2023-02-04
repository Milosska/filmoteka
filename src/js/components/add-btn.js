//<!-- Євген Чорний -->
// За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (local-storage);
// За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (local-storage);


// const f = {Сюда должен приходить объек с данными офильма.};!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const f = {
  adult: false,
  backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
  id: 505642,
  title: 'Black Panther: Wakanda Forever',
  original_language: 'en',
  original_title: 'Black Panther: Wakanda Forever',
  overview:
    'Queen Ramonda, Shuri, Description.',
  poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  media_type: 'movie',
  genre_ids: [28, 12, 878],
  popularity: 2791.083,
  release_date: '2022-11-09',
  video: false,
  vote_average: 7.554,
  vote_count: 2092,
};


function addToWatchedLS(selectedMovieId) {
  const savedMovie = f;
  let arrayToSaveMovies = [];
  let moviesSavedInLS = localStorage.getItem('watched');
  if (!moviesSavedInLS) {
    arrayToSaveMovies.push(savedMovie);
    localStorage.setItem('watched', JSON.stringify(arrayToSaveMovies));
    return;
  } else {
    moviesSavedInLS = JSON.parse(moviesSavedInLS);
    let map = moviesSavedInLS.map(movie => {
      return movie.id;
    });
    let index = map.indexOf(Number(selectedMovieId));
    if (index < 0) {
      arrayToSaveMovies.push(...moviesSavedInLS, savedMovie);
      localStorage.setItem('watched', JSON.stringify(arrayToSaveMovies));
    } else {
    // let newArray = [];
      moviesSavedInLS.splice(index, 1);
      arrayToSaveMovies = moviesSavedInLS;
      localStorage.setItem('watched', JSON.stringify(arrayToSaveMovies));
    }
    if (moviesSavedInLS.length < 1) {
      localStorage.removeItem('watched');
    }
  }
}


function addToQueueLS(selectedMovieId) {
  const savedMovie = f;
  let arrayToSaveMovies = [];
  let moviesSavedInLS = localStorage.getItem('queue');
  if (!moviesSavedInLS) {
    arrayToSaveMovies.push(savedMovie);
    localStorage.setItem('queue', JSON.stringify(arrayToSaveMovies));
    return;
  } else {
    moviesSavedInLS = JSON.parse(moviesSavedInLS);
    let map = moviesSavedInLS.map(movie => {
      return movie.id;
    });
    let index = map.indexOf(Number(selectedMovieId));
    if (index < 0) {
      arrayToSaveMovies.push(...moviesSavedInLS, savedMovie);
      localStorage.setItem('queue', JSON.stringify(arrayToSaveMovies));
    } else {
    //   let newArray = [];
      moviesSavedInLS.splice(index, 1);
      arrayToSaveMovies = moviesSavedInLS;
      localStorage.setItem('queue', JSON.stringify(arrayToSaveMovies));
    }
    if (moviesSavedInLS.length < 1) {
      localStorage.removeItem('queue');
    }
  }
}