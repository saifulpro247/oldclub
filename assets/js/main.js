(function ($) {
  "use strict";
  $(document).ready(function () {

  // Sticky Menu
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 1; 
      if (window_top > 200) {
        $('.header_area').addClass('sticky_menu animated fadeInDown');
      } else {
        $('.header_area').removeClass('sticky_menu animated fadeInDown');
      }
    }); 

    // mobile menu
    $(".menu_humberger").on("click", function () {
      $(".mobile_menus").toggleClass("d-block");
      
      $(".has-menu").on("click", function () {
        $(".sub-menu").toggleClass("d-block").css("opacity", "1");
      });
    });

    /*-- pricing selector scripts start --*/
    var pricingSelector = $(".pricing-selector");
    if (pricingSelector.length) {
      $(".pricing-monthly-btn").on("click", function () {
        $("#pricing-selector").prop("checked", false);
        $(".pricing-monthly").css("display", "block");
        $(".pricing-yearly").css("display", "none");
      });

      $(".pricing-yearly-btn").on("click", function () {
        $("#pricing-selector").prop("checked", true);
        $(".pricing-monthly").css("display", "none");
        $(".pricing-yearly").css("display", "block");
      });

      $("#pricing-selector").on("change", function () {
        if (this.checked) {
          $(".pricing-monthly").css("display", "none");
          $(".pricing-yearly").css("display", "block");
        } else {
          $(".pricing-monthly").css("display", "block");
          $(".pricing-yearly").css("display", "none");
        }
      });
    }

    // pricing table tab

    // client testimonial
    $(".client_testimonial_area").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: [
        "<i class='bi bi-arrow-left-short'></i>",
        "<i class='bi bi-arrow-right-short'></i>",
      ],
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
        },
      },
    });
    $(".owl-carousel").find(".owl-nav").removeClass("disabled");
    $(".owl-carousel").on("changed.owl.carousel", function (event) {
      $(this).find(".owl-nav").removeClass("disabled");
    });
  });
})($);
