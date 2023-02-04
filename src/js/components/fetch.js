// <!-- Ольга Мельник та Олексій Воробйов -->

// У параметри "params" передавати:
// ----- у разі фетча за ключовим словом:
// 1) першим параметром - слово для пошуку
// 2) другим параметром - номер сторінки(число або строка)
// ----- у разі фетча за трендами: номер сторінки(число або строка)
// ----- у разі фетча фільму або трейлеру: id (число або строка)
// Приклад виклику функції: fetchInfo('keyword', 'Batman', 1);

async function fetchInfo(endpoint, ...params) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '51114562faac57108ae3113fba230ec4';
  const END_URL = {
    trends: `trending/movie/day?api_key=${TOKEN}&page=${params[0]}`,
    keyword: `search/movie?api_key=${TOKEN}&language=en-US&query=${params[0]}&page=${params[1]}&include_adult=false`,
    movie: `movie/${params[0]}?api_key=${TOKEN}&language=en-US`,
    trailer: `${BASE_URL}movie/${params[0]}/videos?api_key=${TOKEN}`,
    genres: `genre/movie/list?api_key=${TOKEN}&language=en-US`,
  };

  try {
    const response = await fetch(`${BASE_URL}${END_URL[endpoint]}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchInfo };
