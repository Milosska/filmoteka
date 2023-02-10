import { fetchInfo } from './fetch.js';

function trailer(data) {
  fetchInfo('trailer', data.id)
    .then(data => {
      if (!data.results[0]) {
        return;
      }

      let url = data.results[0].key;

      data.results.forEach(result => {
        if (result.name.toLowerCase().includes('trailer')) {
          url = result.key;
        }
      });

      // const url = data.results[0].key;
      const iframe = document.querySelector('.iframe');
      const refs = {
        openModalBtn: document.querySelector('.movie__img'),
        closeModalBtn: document.querySelector('[data-trailer-close]'),
        modal: document.querySelector('[data-trailer]'),
      };

      refs.openModalBtn.classList.add('trailer__link');
      refs.openModalBtn.addEventListener('click', openModal);
      refs.closeModalBtn.addEventListener('click', closeModal);

      //Відкриття модалки при кліку на картку фільму
      function openModal() {
        refs.modal.classList.remove('is-hidden');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${url}`);
      }

      // Закриття модалки при кліку на кнопку
      function closeModal() {
        refs.modal.classList.add('is-hidden');
        iframe.setAttribute('src', `#`);
      }

      // Закриття модалки при кліку на оверлей
      refs.modal.addEventListener('click', e => {
        if (e.target === refs.modal) {
          closeModal();
        }
      });

      // Закриття модалки та зняття прослуховувача з клавіші 'Escape'
      document.addEventListener(
        'keydown',
        evt => {
          if (evt.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', evt);
          }
        },
        { once: true }
      );
    })
    .catch(err => {
      console.log(err);
    });
}
export { trailer };
