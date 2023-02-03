// 1) Функція, що рендерить розмітку для 1 картки - Ярослав Михайлов;

//Виклик шаблону hbs:
import cardMarkup from '../../templates/film-card.hbs';

// Функція cardsMarkupCreate
// приймає масив фільмів,
// та повертає строку, яка відповідає HTML-розмітці списку фільмів
// <li>...</li>
export default function cardsMarkupCreate(moviesArray) {
  const Handlebars = require('handlebars');
  const BASEIMGURL = 'https://image.tmdb.org/t/p/w500';

  Handlebars.registerHelper('addBaseUrl', function (imgPath) {
    return BASEIMGURL + imgPath;
  });

  Handlebars.registerHelper('takeYearFromDate', function (date) {
    return date ? date.split('-')[0] : 'year n/a';
  });

  Handlebars.registerHelper('getGenres', function (genresArray) {
    const genres = genresArray.join(',');
    return genres ? genres : 'Genres n/a';
  });

  return cardMarkup(moviesArray);
}
