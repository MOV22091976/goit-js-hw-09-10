import './styles.css';
import itemsTamplate from './menu-items.hbs';

import menuJson from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('.theme-switch__toggle');
const localStorageTheme = localStorage.getItem('theme');

inputRef.addEventListener('change', handleInputChange);

function handleInputChange() {
  if (!inputRef.checked) {
    addLightTheme();
  } else {
    addDarkTheme();
  }
}

function addLightTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function addDarkTheme() {
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}

function lookLocalStorage() {
  if (localStorageTheme === Theme.DARK) {
    document.body.classList.toggle(Theme.DARK);
    localStorage.clear();
    inputRef.checked = true;
  } else {
    document.body.classList.toggle(Theme.LIGHT);
    localStorage.clear();
    inputRef.checked = false;
  }
}

lookLocalStorage();

const markup = itemsTamplate(menuJson);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
