import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.header = document.querySelector('.header')
    this.pageSections = document.querySelectorAll('.page-section')
    this.browserHeight = window.innerHeight
    this.previousScrollY = window.scrollY
    this.events()
  }

  events() {
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  // add bottom border line on the header
  runOnScroll() {
    this.determineScrollDirection()

    if (window.scrollY > 60) {
      this.header.classList.add('header--line')
    } else {
      this.header.classList.remove('header--line')
    }

    this.pageSections.forEach(el => this.calcSection(el))
  }

  // deterimines if scrolling up or down
  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = 'down'
    } else {
      this.scrollDirection = 'up'
    }
    this.previousScrollY = window.scrollY
  }

  // highlights the current link
  calcSection(el) {

    if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
      let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100

      if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
        let matchingLink = el.getAttribute("data-matching-link")
        document.querySelectorAll(`.header__nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
        document.querySelector(matchingLink).classList.add("is-current-link")
      }

    }
  }

}


export default StickyHeader;
