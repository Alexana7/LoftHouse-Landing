const navButton = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerMenu = document.querySelector('.header__top-row');

navButton.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  headerMenu.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
}