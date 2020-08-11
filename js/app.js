AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {
    $("[data-trigger]").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    $(".btn-close, .screen-overlay").click(function(e) {
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

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    // Scrollax
    $.Scrollax();


    var contentWayPoint = function() {
        var i = 0;
        $('.wathefa-animate').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('wathefa-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('body .wathefa-animate.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
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

        }, { offset: '95%' });
    };
    contentWayPoint();

})(jQuery);