
const img = document.querySelector('.rightIcon');
const menu = document.querySelector('.accMenu');

function changeClass() {
  menu.classList.toggle('accMenu_active');
}

img.addEventListener('mouseover', changeClass);
menu.addEventListener('mouseleave', changeClass);