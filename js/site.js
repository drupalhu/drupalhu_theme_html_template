$(document).ready(function() {

  // Testimonial slideshow
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
  
  // DEV: menu-toggle-button;
  $('.menu-toggle').click(function() {
    $('body').toggleClass('menu-open');
  });
   
});