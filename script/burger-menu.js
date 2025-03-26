let BurgerMenu = document.querySelector('.header__burger-menu');
let burgerNav = document.querySelector('.header__burger-navigation');

BurgerMenu.onclick = function () {
    BurgerMenu.classList.toggle('header__burger-menu-open');
    burgerNav.classList.toggle('open');
    burgerNav.classList.toggle('closed');
}