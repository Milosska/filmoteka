const toggle = document.querySelector('.themetoggle');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const THEME_LOCAL_STORAGE_KEY = 'theme';

moonIcon.style.visibility = 'hidden';
sunIcon.style.visibility = 'visible';

toggle.addEventListener('click', onThemeChangeClick);

addThemeClass();
drawThemeBtnIco();

function onThemeChangeClick() {
  if (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) === 'dark') {
    localStorage.removeItem(THEME_LOCAL_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, 'dark');
  }
  addThemeClass();
  drawThemeBtnIco();
}

export default function addThemeClass() {
  try {
    if (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) === 'dark') {
      addThemetoClass('.main', 'dark');
      addThemetoClass('.movie-card__title', 'dark');
      addThemetoClass('.tui-page-btn', 'dark');
      addThemetoClass('.clear-list', 'dark');
      addThemetoClass('.clear-list__link', 'dark');
    } else {
      removeThemeFromClass('.main', 'dark');
      removeThemeFromClass('.movie-card__title', 'dark');
      removeThemeFromClass('.tui-page-btn', 'dark');
      removeThemeFromClass('.clear-list', 'dark');
      removeThemeFromClass('.clear-list__link', 'dark');
    }
  } catch (err) {}
}

// Draw icon that equal current theme
function drawThemeBtnIco() {
  if (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) === 'dark') {
    sunIcon.style.visibility = 'hidden';
    moonIcon.style.visibility = 'visible';
    return;
  }
  moonIcon.style.visibility = 'hidden';
  sunIcon.style.visibility = 'visible';
}

// Adds theme to all elements, by class
function addThemetoClass(className, themeName) {
  document
    .querySelectorAll(className)
    .forEach(classElement => classElement.classList.add(themeName));
}

// Removes theme from all elements, by class
function removeThemeFromClass(className, themeName) {
  document
    .querySelectorAll(className)
    .forEach(classElement => classElement.classList.remove(themeName));
}
