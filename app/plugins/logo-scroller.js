const element_logo = document.querySelector('.header__logo');

export default function () {
  window.onscroll = () => {
    console.log('meow');
    const isWindowScrolled = window.scrollY > 10;

    console.log(isWindowScrolled)

    element_logo.classList[isWindowScrolled ? 'add' : 'remove']('header__logo--tucked');
  }
}
