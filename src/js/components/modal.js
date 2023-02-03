// <!-- Люда Даценко та Тетяна Крамаренко -->
const btnModalFilm = document.querySelector(".test_modal_film");
const btnModalTeam = document.querySelector(".test_modal_team");
const modalClose = document.querySelector(".modal_close");
const myOverlay = document.querySelector(".overlay");
const modalTeam = document.querySelector(".modal_team");
const myModal = document.querySelector(".modal_card");

// myOverlay.hidden = true;

// прослуховувач на картку фільма:
// const onCardFilmClick = () => {
//   myOverlay.hidden = false;
//   modalTeam.hidden = true;
//   // при натисканні на "Esc" - модальне вікно закривається:
//     document.addEventListener('keydown', (event) => {
//        if (event.key === 'Escape') {
//          myOverlay.hidden = true;      
//        }
//     });
  
// };

btnModalFilm.addEventListener("click", onModalOpen);
btnModalTeam.addEventListener("click", onModalOpen);

function onModalOpen(event) {
    myOverlay.hidden = false;
  // modalTeam.hidden = true;
  console.log(event.target);
   if (event.target === myModal) {
    myModal.hidden = false;

  } else if (event.target === modalTeam) {
    modalTeam.hidden = false;
  }
  document.addEventListener('keydown', (event) => {
       if (event.key === 'Escape') {
         myOverlay.hidden = true;
        myModal.hidden = true;
         modalTeam.hidden = true;
       
       }
  });
myOverlay.addEventListener('click', () => {
  myOverlay.hidden = true; 
   myModal.hidden = true;
        modalTeam.hidden = true;
});
  modalClose.addEventListener('click', () => {
    myOverlay.hidden = true; 
    myModal.hidden = true;
        modalTeam.hidden = true;
});


}



// при натисканні на оверлей - модальне вікно закривається:
// myOverlay.addEventListener('click', () => {
//   myOverlay.hidden = true; 
// });

// при натисканні "хрестик" - модальне вікно закривається:
// modalClose.addEventListener('click', () => {
//   myOverlay.hidden = true; 
// });

// прослуховувач на "GoIT Students" в футері:
// const onTeamClick = () => {
//   myOverlay.hidden = false;
//   myModal.hidden = true;

  // при натисканні на "Esc" - модальне вікно закривається:


// btnModalTeam.addEventListener("click", onTeamClick);
    

