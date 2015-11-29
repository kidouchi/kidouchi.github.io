$(document).ready(function () {
    var $window = $(window);
    
    $(window).scroll(function() {
        /* TODO: Refactor using helper functions */
        /* Navbar header animation as user scrolls to certain sections */
        var $section1 = $("#section-1");
        var $section2 = $("#section-2");
        var $section3 = $("#section-3");
        if ($window.scrollTop() >= ($section1.offset().top-400)
           && $window.scrollTop() < ($section2.offset().top-200)) {
            $("#about-item").css({
                'transition': 'transform 200ms ease-out',
                '-webkit-transform': 'scale(1.3) translateX(30px)',
                '-ms-transform': 'scale(1.3) translateX(30px)',
                'transform': 'scale(1.3) translateX(30px)'
            });
            $("#resume-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#project-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
        } else if (($window.scrollTop() >= $section2.offset().top-200) && 
                   ($window.scrollTop() < $section3.offset().top-500)) {
            $("#about-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#resume-item").css({
                'transition': 'transform 200ms ease-out',
                '-webkit-transform': 'scale(1.3) translateX(30px)',
                '-ms-transform': 'scale(1.3) translateX(30px)',
                'transform': 'scale(1.3) translateX(30px)'
            });
            $("#project-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
        } else if ($window.scrollTop() >= $section3.offset().top-500) {
             $("#about-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#resume-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#project-item").css({
                'transition': 'transform 200ms ease-out',
                '-webkit-transform': 'scale(1.3) translateX(30px)',
                '-ms-transform': 'scale(1.3) translateX(30px)',
                'transform': 'scale(1.3) translateX(30px)'
            });
        } else { // reset everything
            $("#about-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#resume-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0)',
                '-ms-transform': 'scale(1) translateX(0)',
                'transform': 'scale(1) translateX(0)'
            });
            $("#project-item").css({
                'transition': 'transform 200ms ease-in',
                '-webkit-transform': 'scale(1) translateX(0px)',
                '-ms-transform': 'scale(1) translateX(0px)',
                'transform': 'scale(1) translateX(0px)'
            });
        }
    });
    
    var $anim_elems = $(".scroll-view-animate-elem");
    
    //  helps fade in animation when container in view
    function check_in_view() {
        var window_height = $window.height();
        var window_top = $window.scrollTop();
        var window_bottom = window_top + window_height;
        
        $.each($anim_elems, function() {
            var $elem = $(this);
            var elem_height = $elem.outerHeight(true);
            var elem_top = $elem.offset().top;
            var elem_bottom = elem_top + elem_height;
            
            if ((elem_bottom >= window_top) && (elem_top <= window_bottom)) {
                $elem.addClass("in-view");
            }
//            } else {
//                $elem.removeClass("in-view");
//            }
        });
    }
    
    $window.on('scroll resize', check_in_view);
    $window.trigger('scroll');
    
});