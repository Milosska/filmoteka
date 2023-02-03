// <!-- Люда Даценко та Тетяна Крамаренко -->
const btnModalFilm = document.querySelector(".test_modal_film");
const btnModalTeam = document.querySelector(".test_modal_team");
const modalTeam = document.querySelector(".modal_team");
const myOverlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal_close");
const myModal = document.querySelector(".modal_card");

myOverlay.hidden = true;

// прослуховувач на картку фільма:
const onCardFilmClick = () => {
  myOverlay.hidden = false;
  // при натисканні на "Esc" - модальне вікно закривається:
    document.addEventListener('keydown', (event) => {
       if (event.key === 'Escape') {
         myOverlay.hidden = true;      
       }
    });
};

btnModalFilm.addEventListener("click", onCardFilmClick);

// при натисканні на оверлей - модальне вікно закривається:
myOverlay.addEventListener('click', () => {
  myOverlay.hidden = true; 
});

// при натисканні "хрестик" - модальне вікно закривається:
modalClose.addEventListener('click', () => {
  myOverlay.hidden = true; 
});

// прослуховувач на "GoIT Students" в футері:
const onTeamClick = () => {
  myOverlay.hidden = false;
  // при натисканні на "Esc" - модальне вікно закривається:
    document.addEventListener('keydown', (event) => {
       if (event.key === 'Escape') {
         myOverlay.hidden = true;      
       }
    });
};

btnModalTeam.addEventListener("click", onTeamClick);
    
