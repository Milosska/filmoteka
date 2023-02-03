// <!-- Люда Даценко та Тетяна Крамаренко -->
const btnModalFilm = document.querySelector(".test__modal__film");
const btnModalTeam = document.querySelector(".test__modal__team");
const modalClose = document.querySelector(".modal__close");
const myOverlay = document.querySelector(".overlay");
const modalTeam = document.querySelector(".modal__team");
const modalCard = document.querySelector(".modal__card");

btnModalFilm.addEventListener("click", onModalOpen);
btnModalTeam.addEventListener("click", onModalOpen);

function onModalOpen(event) {
  myOverlay.hidden = false;
   if (event.target === btnModalFilm) {
     modalCard.hidden = false;
     modalTeam.hidden = true;
    } else  {
     modalTeam.hidden = false;
   }
  document.addEventListener('keydown', (event) => {
     if (event.key === 'Escape') {
        myOverlay.hidden = true;
        modalCard.hidden = true;
        modalTeam.hidden = true;
      }
  });
   myOverlay.addEventListener('click', () => {
     hideAll();
  });
   modalClose.addEventListener('click', () => {
     hideAll();
  });
}

function hideAll(){
  myOverlay.hidden = true; 
  modalCard.hidden = true;
  modalTeam.hidden = true;
}






