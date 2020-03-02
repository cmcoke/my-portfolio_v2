import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import SmoothScroll from './modules/SmoothScroll'


let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".about"), 58);
new RevealOnScroll(document.querySelectorAll(".process"), 65);
new RevealOnScroll(document.querySelectorAll(".contact"), 70);
let smoothScroll = new SmoothScroll();

// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fl
if(module.hot) {
  module.hot.accept()
}
