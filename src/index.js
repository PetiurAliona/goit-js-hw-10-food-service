import menuTpl from './tpl/menu.hbs';
import dataMenu from './menu.json';

document.querySelector('.js-menu').innerHTML = menuTpl(dataMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const ThemeSwitchNode = document.querySelector('#theme-switch-toggle');
const bodyNode = document.querySelector('body');


function checkTheme() {
  localStorage.theme === Theme.DARK
    ? (bodyNode.classList.replace('light-theme', 'dark-theme'), (ThemeSwitchNode.checked = true))
    : (bodyNode.classList.replace('dark-theme', 'light-theme'),
      (ThemeSwitchNode.checked = false));
}

checkTheme();

ThemeSwitchNode.addEventListener('change', event => {
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    checkTheme();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    checkTheme();
  }
});

// function removeClass() {
 
//     if (ThemeSwitchNode .checked) {
//         bodyNode.classList.remove(LIGHT);
//         bodyNode.classList.add(DARK)

//     } else {
//         bodyNode.classList.remove(DARK);
//         bodyNode.classList.add(LIGHT);
//     }
