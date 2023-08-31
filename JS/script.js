const newLocal = $().ready(function () {

    //hamburger Toggle
    $('.humbarger').click(function (event) {
        $('.container-nav').slideToggle(500);
        event.preventDefault();

        $('.container-nav a').click(function (event) {
            if ($(window).width() < 768) {
                $('.container-nav').slideUp(500);
                event.preventDefault();
            }
        });
    });

});