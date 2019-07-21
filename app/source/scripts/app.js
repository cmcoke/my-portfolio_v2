// fade-in on load 
$(document).ready(function(){

  $('body').css('display', 'none');
  $('body').fadeIn(1300);
  
});


// smooth scrolling and active link
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top - 100
      }, 1000);
  }
});


// mobile menu
var navToggle = document.querySelector('.header__menu-icon');
var overlay = $('.overlay');

navToggle.addEventListener('click', function() {
  document.body.classList.toggle('navigation-is-open');
  navToggle.classList.toggle('header__menu-icon--close-x');
  overlay.toggle();
});

