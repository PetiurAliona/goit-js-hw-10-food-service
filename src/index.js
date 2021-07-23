import menuTpl from './tpl/menu.hbs';
import dataMenu from './menu.json';

document.querySelector('.js-menu').innerHTML = menuTpl(dataMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};