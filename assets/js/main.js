(function($) {
    "use strict";

    window.addEventListener('resize', function() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var button = document.getElementById('myButton'); // Replace 'myButton' with the actual ID of your button
    
      if (screenWidth <= 767) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
    
    // Initial check on page load
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var button = document.getElementById('myButton'); // Replace 'myButton' with the actual ID of your button
    
    if (screenWidth <= 767) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
    
    // mobile menu

    $('.menu_humberger').on('click', function(){
        $('.mobile_menus').toggleClass('d-block');
    })

   
    
  
      $(".client_testimonial_area").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
        dots: false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            dots: false,
            nav: false
        },
        600:{
            items:1,
            nav: true
        },
        1000:{
            items:1,

        }
      }
      });
        $(".owl-carousel").find(".owl-nav").removeClass("disabled");
        $(".owl-carousel").on("changed.owl.carousel", function (event) {
          $(this).find(".owl-nav").removeClass("disabled");
        });

       
    

})($);