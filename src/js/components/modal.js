// <!-- Люда Даценко та Тетяна Крамаренко -->
const test = document.querySelector(".test-modal");
const myOverlay = document.querySelector(".overlay");
myOverlay.hidden = true;

const myModal = document.querySelector(".modal_card");
console.log(myModal);


const onBtnClick = () => {
    myOverlay.hidden = false;
    myModal.hidden = false;
    
    document.addEventListener('keydown', (event) => {
       if (event.key === 'Escape') {
         myOverlay.hidden = true;
         myModal.hidden = true;
       }
    });

    

};

test.addEventListener("click", onBtnClick);
myOverlay.addEventListener('click', () => {
    myOverlay.hidden = true;
    myModal.hidden = true;
 }) 
    
