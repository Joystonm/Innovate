$(document).ready(function(){

    $("*").click(function() {
   $("this").slideToggle(1000);
    });

    $("#read-btn").click(function() {
        $("#slide1").slideToggle(1000);
        $("#slide2").slideToggle(1000);
        $("#read-btn").hide();
});

});