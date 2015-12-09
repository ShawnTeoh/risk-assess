$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$(window).load(function () {
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$("#toggle-nav").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#sidebar-wrapper, #page-content-wrapper").toggleClass("toggled");
    $("#toggle-nav a span").toggleClass("glyphicon-triangle-left glyphicon-triangle-right");
});