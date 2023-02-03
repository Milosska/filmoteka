// 1) Функція, що шукає фільми за ключовим словом - Олег;

import { fetchInfo } from "./components/fetch";
import Notiflix from 'notiflix';
import filmListMarkup from '../templates/film-card.hbs';
import filmCardMarkup from '../templates/film-card-mark.hbs'


// console.log(filmListMarkup);
// console.log(filmCardMarkup);


const form = document.querySelector('#search-form');
const listFilm = document.querySelector('.gallery');
form.addEventListener('submit',onFormSumbmit);
let currentPage = 1;

function onFormSumbmit(e) {
  e.preventDefault();
  currentPage = 1;
  query = form.children[0].value.trim();

  fetchInfo('keyword',query, currentPage)
  .then(res => {
    if(res.length === 1){
      listFilm.insertAdjacentHTML('beforeend',filmCardMarkup(res));
      return;
    }

    if(res.length >= 2 && res.length <= 10){
      listFilm.insertAdjacentHTML('beforeend',filmListMarkup(res));
      return;
    }

  })
  .catch(err => {
    console.log(err);
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name and ');
    listFilm.innerHTML = '';  // посилання на популярні фільми
    return;

  });
}

// function filmCardMarkup(arr){
  
// }

  // повертаємо картку фільма де картинка і назва і рік


// function filmListMarkup(){
// //  повертаємо всю картку фільма Чекаю Юрія
// }
