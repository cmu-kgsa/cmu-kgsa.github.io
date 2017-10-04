var pitt_content = document.getElementById("pitt-content");
var pitt_button = document.getElementById("pitt-button");

var cmu_content = document.getElementById("cmu-content");
var cmu_button = document.getElementById("cmu-button");



pitt_button.onclick = function(){
    
  if(pitt_content.className == "open"){
      /*
      pitt_content.className = "";
      cmu_content.className = "open";
      */
  } else {
      
      pitt_content.className = "open";
      cmu_content.className = "";
      
  }
    
};

cmu_button.onclick = function(){
    
  if(cmu_content.className == "open"){
      /*
      cmu_content.className = "";
      pitt_content.className = "open";
      */
  } else {
      cmu_content.className = "open";
      pitt_content.className = "";
  }
    
};





(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    
    $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','transparent');
    } else {
    $('.navbar').css('background','transparent');
    }
    });
    
    
//    $(window).scroll(function() {
//    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
//    {
//        $('.opaque-navbar').addClass('opaque');
//    } else {
//        $('.opaque-navbar').removeClass('opaque');
//    }
//    });
    
    
    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict














