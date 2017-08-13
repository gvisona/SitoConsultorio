$(function() {
    //$("#header").load("header.html");
    $(".navbar").load("navbar.html");
});

document.getElementById("home-dropdown").addEventListener("mouseenter", function() {
    $(".dropdown-toggle").dropdown();
})