$(document).ready(function() {
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
        if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
            $("a.up-button").css({
                    'transition' : 'transform 200ms ease-out',
                    '-webkit-transform' : 'rotate(180deg)',
                    '-o-transform' : 'rotate(180deg)',
                    '-ms-transform' : 'rotate(180deg)'
            }).attr("href", "#top");
        } else {
            $("a.up-button").css({
                    'float': 'right',
                    'margin-right' : '20px',
                    'transition' : 'transform 200ms ease-out',
                    '-webkit-transform' : 'rotate(0deg)',
                    '-o-transform': 'rotate(0deg)',
                    '-ms-transform': 'rotate(0deg)'
            }).attr("href", "#section-3");
        }
    });

});