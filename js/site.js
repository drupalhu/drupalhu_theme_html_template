$(document).ready(function() {

  // Testimonial slideshow
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });


  // ###########################################################################
  // Snap.js setup for swipe-able mobile-menu.
  // @see https://github.com/jakiestfu/Snap.js
  
  var snapper = new Snap({
    element: document.getElementById('main'),
    dragger: null,
    disable: 'right',       // Disabling as we don't want any magic on right.
    addBodyClasses: true,
    hyperextensible: true,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'linear',
    maxPosition: 180,       // Menu-width-dependent.
    minPosition: -180,      // Menu-width-dependent.
    tapToClose: true,
    touchToDrag: true,
    slideIntent: 40,        // Might have to do something with our layout... ;)
    minDragDistance: 5
  });
  
  // Disabling on full screen.
  var menuSnapSwitch = function() {
    // NOTE: width data must be in sync with @media breakpoint $screen-full-min.
    // Set in '/sass/_base.scss'.
    if (window.innerWidth >= 865) {
      snapper.disable();
      
      $('body').addClass('menu-snap-disabled');
      $('body').removeClass('menu-snap-enabled');
      
      console.log('Snapper disabled.');
    }
    else {
      snapper.enable();
      snapper.settings = {
        disable: 'right' // We still don't need anything on the right side.
      };
      
      $('body').addClass('menu-snap-enabled');
      $('body').removeClass('menu-snap-disabled');
      
      console.log('Snapper enabled.');
    }
  };
  
    // Snap.js menu operations using a trigger (swipe-operations are default).  
  $('.menu-toggle').click(function() {
    
    // Closing in any case, but opening only if menuSnapSwitch() had allowed it.
    if( snapper.state().state=="left" ){
      snapper.close();
    } else if ($('body').hasClass('menu-snap-enabled')) {
      snapper.open('left');
    }
  });
  
  
  // ---------------------------------------------------------------------------
  // Monitoring screen-size so menu-snapping is only available on small screens.

  // On load.
  menuSnapSwitch();
  // In case of switching orientation.
  // For dev, 'resize' is better (for e.g. debugging with Chrome devtools).
  // For production though, we may want 'orientationchange' event (?).
  $(window).bind('resize', menuSnapSwitch);
});