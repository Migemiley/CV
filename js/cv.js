
$.jribbble.getShotsByPlayerId('emiley', function (playerShots) {
    var html = [];

    $('#shotsByPlayerId').html(html.join(''));
}, {page: 1, per_page: 9});


$("html").niceScroll({
    mousescrollstep: 75,
    cursorcolor: "#198750",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});

(function ($) {
  $(document).ready(function(){
    $(".navbar").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });
});
  }(jQuery));
