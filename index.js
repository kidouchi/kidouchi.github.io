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
    
    $(function() {
        var $el, leftPos, newWidth,
            $mainNav = $(".header-items");

        $mainNav.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");

        $magicLine
            .width($(".current-item").width())
            .css("left", $(".current-item a").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());

        $(".header-items li a").hover(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        }, function() {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });    
        });
    });
});