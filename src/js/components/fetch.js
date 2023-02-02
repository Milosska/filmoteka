// <!-- Ольга Мельник та Олексій Воробйов -->

// Запит на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
let page = 1;

async function fetchTrending(page) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '51114562faac57108ae3113fba230ec4';

  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${TOKEN}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Запит фільму за ключовим словом на головній сторінці
async function fetchSearch(value, page) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '51114562faac57108ae3113fba230ec4';

  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${TOKEN}&language=en-US&query=${value}&page=${page}&include_adult=false`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Запит повної інформації про кінофільм для сторінки кінофільму
async function fetchMovie(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '51114562faac57108ae3113fba230ec4';

  try {
    const response = await fetch(
      `${BASE_URL}movie/${id}?api_key=${TOKEN}&language=en-US`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Запиту повної інформації про можливий трейлер на YouTube
async function fetchVideos(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '51114562faac57108ae3113fba230ec4';

  try {
    const response = await fetch(
      `${BASE_URL}movie/${id}/videos?api_key=${TOKEN}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
