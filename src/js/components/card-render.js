// Функція, що рендерить розмітку для 1 картки

//Виклик шаблону hbs:
import cardMarkup from '../../templates/film-card.hbs';
import popcornPlugMarkup from '../../templates/popcorn-plug.hbs';

// Функція cardsMarkupCreate
// приймає масив фільмів,
// та повертає строку, яка відповідає HTML-розмітці списку фільмів
// <li>...</li>
// Якщо другий параметр, який передається функції буде true, то в розмітку додасться
// анімована заглушка "popkorn"

export default function cardsMarkupCreate(
  moviesArray,
  isPopcornPlugNeedToRender = false
) {
  const Handlebars = require('handlebars');
  const BASEIMGURL = 'https://image.tmdb.org/t/p/w500';

  // Add base URL to image URL from backend
  Handlebars.registerHelper('addBaseUrl', function (imgPath) {
    return BASEIMGURL + imgPath;
  });

  // transform 2023-01-01 to 2023
  Handlebars.registerHelper('takeYearFromDate', function (date) {
    return date ? date.split('-')[0] : 'year n/a';
  });

  // join genres from array to one string
  Handlebars.registerHelper('getGenres', function (genresArray) {
    const genresCount = genresArray.length;

    if (genresCount === 0) {
      return 'Genres n/a';
    }

    if (genresCount > 2) {
      return `${genresArray[0]}, ${genresArray[1]}, other`;
    }

    return genresArray.join(',');
  });

  // transform rate from 7.948 to 7.9
  Handlebars.registerHelper('trunc', function (voteString) {
    const truncatedString = voteString
      ? (Math.round(parseFloat(voteString) * 10) / 10).toString()
      : 'n/a';

    return truncatedString.length === 1
      ? truncatedString + '.0'
      : truncatedString;
  });

  return isPopcornPlugNeedToRender
    ? cardMarkup(moviesArray) + popcornPlugMarkup()
    : cardMarkup(moviesArray);
}
