let BurgerMenu = document.querySelector('.header__burger-menu');
let burgerNav = document.querySelector('.header__burger-navigation');

BurgerMenu.onclick = function () {
    burgerNav.classList.toggle('open');
    burgerNav.classList.toggle('closed');
}