 // 1) Функція, що малює розмітку мейна при переході на сторінку або використанні пагінації - Ірина;

import { fetchInfo } from './fetch.js';
import cardsMarkupCreate from './card-render';

const mainList = document.querySelector('.main__list');

const btn = document.querySelector('.btn');
btn.addEventListener('click', renderPageMarkup);
// https://api.themoviedb.org/3/trending/movie/day?api_key=51114562faac57108ae3113fba230ec4&page=2


function renderPageMarkup(evt, page=5) {
  clearMarkup();
  
  fetchInfo('keyword', 'dog', page).then(data => {
              
    localStorage.setItem('current-films', JSON.stringify(data.results));

    const markup = cardsMarkupCreate(data.results);

    mainList.insertAdjacentHTML('beforeend', markup);
       
    }).catch (error => onFetchError());
}

function clearMarkup() {
  mainList.innerHTML = '';
}

function onFetchError() {
     
}

export { renderPageMarkup };