// Функціонал спінера
const refs = {
  spinner: document.querySelector('.spinner'),
};

const spinner = {
  show() {
    refs.spinner.classList.remove('visually-hidden');
  },

  hide() {
    refs.spinner.classList.add('visually-hidden');
  },
};

export default spinner;
