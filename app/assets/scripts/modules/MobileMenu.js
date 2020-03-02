class MobileMenu {

  constructor() {
    this.menuIcon = document.querySelector(".header__menu-icon")
    this.menuLinks = document.querySelector(".header__nav")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuIcon.classList.toggle('header__menu-icon--close-x')
    this.menuLinks.classList.toggle('header__nav--open')
  }


}

export default MobileMenu;
