const toggle = document.querySelector('.themetoggle');
console.log(toggle);
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

toggle.addEventListener('click', event => {
  event.preventDefault();
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
      document.querySelector('.main__container').classList.add('dark');
      sunIcon.style.visibility = 'hidden';
      moonIcon.style.visibility = 'visible';
    } else {
      document.querySelector('.main__container').classList.remove('dark');
      moonIcon.style.visibility = 'hidden';
      sunIcon.style.visibility = 'visible';
    }
  } catch (err) {}
}

addDarkClass();
