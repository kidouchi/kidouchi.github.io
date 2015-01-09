$(document).ready(function() {
    console.log("ready!");
     
    var w = $("img.icon").width();
    var h = $("img.icon").height();
    
    $("img.icon").mouseenter(function() {
        $(this).stop().animate({
            width: w + 5 + "px",
            height: h + 5 + "px",
            top: "-5px", 
            left: "-5px" },
            "fast");    
    });
    $("img.icon").mouseleave(function() {
        $(this).stop().animate({
            width: w + "px",
            height: h + "px",
            top: "0px", 
            left: "0px" },
            "fast");  
    });
    
});