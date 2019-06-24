// smooth scrolling
$(document).ready(function() {

    var scrollLink = $('.scroll');
  
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 100
      }, 1000);
    });
  
})

// mobile menu
var navToggle = document.querySelector('.header__menu-icon');
var overlay = $('.overlay');

navToggle.addEventListener('click', function() {
  document.body.classList.toggle('navigation-is-open');
  navToggle.classList.toggle('header__menu-icon--close-x');
  overlay.toggle();
});