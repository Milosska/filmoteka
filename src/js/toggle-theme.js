const toggle = document.querySelector('.themetoggle');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

moonIcon.style.visibility = 'hidden';
sunIcon.style.visibility = 'visible';
addDarkClass();

toggle.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClass();
});

function addDarkClass() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.main').classList.add('dark');
      document
        .querySelectorAll('.movie-card__title')
        .forEach(card => card.classList.add('dark'));
      // document.querySelector('.movie-card__title').classList.add('dark');
      document.querySelector('.tui-page-btn').classList.add('dark');
      sunIcon.style.visibility = 'hidden';
      moonIcon.style.visibility = 'visible';
    } else {
      document.querySelector('.main').classList.remove('dark');
      document
        .querySelectorAll('.movie-card__title')
        .forEach(card => card.classList.remove('dark'));
      // document.querySelector('.movie-card__title').classList.remove('dark');
      document.querySelector('.tui-page-btn').classList.remove('dark');
      moonIcon.style.visibility = 'hidden';
      sunIcon.style.visibility = 'visible';
    }
  } catch (err) {}
}
