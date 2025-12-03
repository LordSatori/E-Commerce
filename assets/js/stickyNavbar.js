// Sticky Navbar
addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("stick-nav", window.scrollY > 50)
})