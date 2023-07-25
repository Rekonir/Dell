const burgerBtn = document.getElementsByClassName('burger__btn')[0]
const burgerBox = document.getElementsByClassName('burgerBox')[0]
const burgerMenu = document.getElementsByClassName('burger__menu')[0]
burgerMenu.style.display === 'none'
function changeBurger() {
    burgerBtn.classList.toggle('burger__btn_active');
    if (burgerMenu.style.display !== 'flex') {
        burgerMenu.style.display = 'flex';
    } else {
        burgerMenu.style.display = 'none';
    }
}
burgerBox.addEventListener('click', changeBurger)