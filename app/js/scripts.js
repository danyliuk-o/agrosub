
$(document).ready(function () {
    $("#headerNav").on("click", "a", function(e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $(".banner__arrow").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 1500);
    });
});
