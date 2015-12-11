$("#toggle-nav").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#sidebar-wrapper, #page-content-wrapper").toggleClass("toggled");
    $("#toggle-nav a span").toggleClass("glyphicon-chevron-left glyphicon-chevron-right");
    if ($("#toggle-nav a span").hasClass("glyphicon-chevron-right")) {
        $("#toggle-nav a").prop("title", "Expand Sidebar");
    } else {
        $("#toggle-nav a").prop("title", "Collapse Sidebar");
    }
});