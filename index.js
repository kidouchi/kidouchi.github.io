$(document).ready(function () {
    var $window = $(window);
    
    var $section1 = $("#section-1");
    var $section2 = $("#section-2");
    var $section3 = $("#section-3");

    // Hide the page initially
//    $section1.hide();
//    $section2.hide();
//    $section3.hide();
//
//    $window.on("load", function() {
//        $section1.show();
//        $section2.show();
//        $section3.show();    
//    });
    
    var $contactMe = $("#contact-me");
    $contactMe.hover(
        function() {
            $contactMe.removeClass("clear-out");
        }, 
        function () {
            $contactMe.addClass("clear-out");
        });

    var tooltipOpen = false;
    $contactMe.on("click", function() {
            if (!tooltipOpen) {
                // Reset form before showing modal
                $(".success-message").hide();
                $(".message-container").show();
                $("#message-form")[0].reset(); 
                // Show modal
                $("#modal").addClass("modal-in-view");
                $("body").css({'z-index' : '-1'});
                tooltipOpen = true;
            } else {
                $("#modal").removeClass("modal-in-view");
                tooltipOpen = false;
            }
        });
    
    $("#close-modal").on("click", function() {
        $("#modal").removeClass("modal-in-view");
        tooltipOpen = false;
    });
    
    // Initially success message is hidden
    $("#message-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/kidouchi@andrew.cmu.edu",
            method: "POST",
            data: {message: $("textarea[name='message']").val()},
            dataType: "json"
        }).success(function(data) {
            console.log("SUCCESS");
            $(".message-container").hide();
            $(".success-message").show();
            window.setTimeout(function() {
                $("#modal").removeClass("modal-in-view");
                tooltipOpen = false;
            }, 1000);
        });
    });
    
    $(window).scroll(function() {
        /* TODO: Refactor using helper functions */
        /* Navbar header animation as user scrolls to certain sections */
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