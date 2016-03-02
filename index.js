$(document).ready(function () {
    var $window = $(window);
    var $section1 = $("#section-1");
    var $section2 = $("#section-2");
    var $section3 = $("#section-3");     
    var $contactMe = $("#contact-me");

    var tooltipOpen = false;
    $contactMe.on("click", function() {
            if (!tooltipOpen) {
                // Reset form before showing modal
                $(".success-message").hide();
                $(".error-message").hide();
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
            $(".message-container").hide();
            $(".success-message").show();
            window.setTimeout(function() {
                $("#modal").removeClass("modal-in-view");
                tooltipOpen = false;
            }, 1000);
        }).error(function(data) {
            $(".error-message").show();
        });
    });
    
    var $aboutItem = $("#about-item");
    var $resumeItem = $("#resume-item");
    var $projectItem = $("#project-item");
     
    $(window).scroll(function() {
        /* TODO: Refactor using helper functions */
        /* Navbar header animation as user scrolls to certain sections */
        if ($window.scrollTop() >= ($section1.offset().top-400)
           && $window.scrollTop() < ($section2.offset().top-200)) {
            $aboutItem.css({ 'border-bottom': '3px solid #29B6F6' });
            $resumeItem.css({ 'border-bottom': 'none' });
            $projectItem.css({ 'border-bottom': 'none' });
        } else if (($window.scrollTop() >= $section2.offset().top-200) && 
                   ($window.scrollTop() < $section3.offset().top-500)) {
            $aboutItem.css({ 'border-bottom': 'none' });
            $resumeItem.css({ 'border-bottom': '3px solid #29B6F6' });
            $projectItem.css({ 'border-bottom': 'none' });
        } else if ($window.scrollTop() >= $section3.offset().top-500) {
             $aboutItem.css({ 'border-bottom': 'none' });
            $resumeItem.css({ 'border-bottom': 'none' });
            $projectItem.css({ 'border-bottom': '3px solid #29B6F6' });
        } else { // reset everything
            $aboutItem.css({ 'border-bottom': '3px solid #29B6F6' });
            $resumeItem.css({ 'border-bottom': 'none' });
            $projectItem.css({ 'border-bottom': 'none' });
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