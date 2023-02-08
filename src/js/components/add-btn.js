// Функція, що додає або витягає фільми з local-storage по натисканню на кнопки модалки

import { indicateLSKey } from './indicate-key';
import cardsMarkupCreate from './card-render';
import emptyLS from '../../templates/empty-library.hbs';
import toggleTheme from '../toggle-theme';

function onModalBtnClick(movieObj) {
  // Активація функції за умови, якщо на сторінці наявна хоча б 1 картка з фільмом
  const moviecard = document.querySelectorAll('.movie-card__img');
  if (moviecard.length < 1) {
    return;
  }

  // Вибір обох кнопок за батьківським елементом
  const btnContEl = document.querySelector('.movie__buttons');

  // Прослуховувач події кліку
  btnContEl.addEventListener('click', onBtnClick);

  // Слова-ключі для роботи з local-storage та проміжна змінна
  const LSKEYS = ['watched', 'queue'];
  let key = 'watched';

  function onBtnClick(evt) {
    // Перевірка натискання на кнопку
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    // Обирання ключа
    LSKEYS.forEach(lskey => {
      if (evt.target.textContent.toLowerCase().includes(lskey)) {
        key = lskey;
      }
    });

    // Виклик та парс фільмів за назвою ключа з local-storage
    let moviesInLS = JSON.parse(localStorage.getItem(key));

    // Активація функції додавання/забирання з local-storage за станом кнопки
    if (evt.target.classList.contains('is-active')) {
      removeToLS(movieObj, key);
    } else {
      addToLS(movieObj, key);
    }

    // Зміна стану кнопки відповідно до відпрацювання функції
    evt.target.classList.toggle('is-active');
    toggleBtnText(evt.target, key);

    // ============ Кінець колбеку / початок допоміжних функцій =============

    // Функція, що додає фільм до локального сховища
    function addToLS(movieObj, key) {
      // ---- Випадок пустого сховища
      if (!moviesInLS) {
        let filmArray = [];
        filmArray.push(movieObj);
        localStorage.setItem(key, JSON.stringify(filmArray));
        return;
      }

      // ---- Перевірка на наявність фільму в листах
      const sameMoviesList = moviesInLS.filter(({ id }) => id === movieObj.id);
      if (sameMoviesList.length >= 1) {
        // Дописати повідомлення "This movie is already in the watched/gueue list"
        return;
      }

      moviesInLS.unshift(movieObj);
      renewLibraryMarkup(moviesInLS);
      localStorage.setItem(key, JSON.stringify(moviesInLS));
    }

    // Функція, що забирає фільм з локального сховища
    function removeToLS(movieObj, key) {
      if (!moviesInLS) {
        return;
      }

      const newMoviesList = moviesInLS.filter(({ id }) => id !== movieObj.id);
      renewLibraryMarkup(newMoviesList);
      localStorage.setItem(key, JSON.stringify(newMoviesList));
    }

    // Функція, що перемальовує розмітку бібліотеки при видаленні фільму
    function renewLibraryMarkup(array) {
      const mainList = document.querySelector('.main__list');

      if (window.location.href.includes('library')) {
        const mainList = document.querySelector('.main__list');
        let currentList = indicateLSKey();

        // -------- Перевірка відповідності між поточним плейлистом і функціоналом кнопок модалки
        if (currentList === key) {
          mainList.innerHTML = cardsMarkupCreate(array);
        }

        // ---- Випадок пустого local-storage
        if (array.length < 1) {
          mainList.innerHTML = emptyLS();
        }
        toggleTheme();
      }
    }
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
