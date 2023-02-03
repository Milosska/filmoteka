//<!-- Ярослав Михайлов -->
const refs = {
  spinner: document.querySelector('.spinner'),
};

const spinner = {
  show() {
    refs.spinner.classList.remove('is-hidden');
  },

  hide() {
    refs.spinner.classList.add('is-hidden');
  },
};

export default spinner;
