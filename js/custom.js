$("#toggle-nav").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#sidebar-wrapper, #page-content-wrapper").toggleClass("toggled");
    $("#toggle-nav a span").toggleClass("glyphicon-triangle-left glyphicon-triangle-right");
});