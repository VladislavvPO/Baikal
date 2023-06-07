const burger = document?.querySelector('[data-burger');
const nav = document?.querySelector('[data-nav]');
const btnClose = document?.querySelector('[data-button-close]');

burger.addEventListener('click', () => {

  nav.classList.add('menu--visible');

})
btnClose.addEventListener('click', () => {
  nav.classList.remove('menu--visible');
})
