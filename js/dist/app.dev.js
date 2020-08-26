"use strict";

AOS.init({
  duration: 800,
  easing: 'slide'
});

(function ($) {
  $("[data-trigger]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
  });
  $(".btn-close, .screen-overlay").click(function (e) {
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  var fullHeight = function fullHeight() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight(); // Scrollax

  $.Scrollax();

  var carousel = function carousel() {
    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  };

  carousel(); // scroll

  var scrollWindow = function scrollWindow() {
    $(window).scroll(function () {
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.top-nav'),
          sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }

      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }

      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }

      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }

        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };

  scrollWindow();

  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $('.wathefa-animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('wathefa-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .wathefa-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn wathefa-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft wathefa-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight wathefa-animated');
              } else {
                el.addClass('fadeInUp wathefa-animated');
              }

              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '95%'
    });
  };

  contentWayPoint();
})(jQuery);