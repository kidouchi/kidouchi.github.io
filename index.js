$(document).ready(function () {
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    $(window).scroll(function() {
//        if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
//            $("a.up-button").css({
//                    'transition' : 'transform 200ms ease-out',
//                    '-webkit-transform' : 'rotate(180deg)',
//                    '-o-transform' : 'rotate(180deg)',
//                    '-ms-transform' : 'rotate(180deg)'
//            }).attr("href", "#top");
//        } else {
//            $("a.up-button").css({
//                    'float': 'right',
//                    'margin-right' : '20px',
//                    'transition' : 'transform 200ms ease-out',
//                    '-webkit-transform' : 'rotate(0deg)',
//                    '-o-transform': 'rotate(0deg)',
//                    '-ms-transform': 'rotate(0deg)'
//            }).attr("href", "#section-3");
//        }
        
        /* TODO: Refactor using helper functions */
        /* Navbar header animation as user scrolls to certain sections */
        if ($(window).scrollTop() >= ($("#section-1").offset().top-400)
           && $(window).scrollTop() < ($("#section-2").offset().top-200)) {
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
        } else if ($(window).scrollTop() >= ($("#section-2").offset().top-200)
                   && $(window).scrollTop() < ($("#section-3").offset().top-500)) {
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
        } else if ($(window).scrollTop() >= ($("#section-3").offset().top-500)) {
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

});