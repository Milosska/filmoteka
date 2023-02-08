import { fetchInfo } from './fetch.js';

function trailer(data) {
  fetchInfo('trailer', data.id)
    .then(data => {
      if (!data.results[0].key) {
        return;
      }
      const url = data.results[0].key;
      const iframe = document.querySelector('.iframe');
      const refs = {
        openModalBtn: document.querySelector('.movie__img'),
        closeModalBtn: document.querySelector('[data-trailer-close]'),
        modal: document.querySelector('[data-trailer]'),
      };
      refs.openModalBtn.classList.add('trailer__link');
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', closeModal);
      function toggleModal() {
        refs.modal.classList.remove('is-hidden');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${url}`);
      }
      function closeModal() {
        refs.modal.classList.add('is-hidden');
        iframe.setAttribute('src', `#`);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
export { trailer };
