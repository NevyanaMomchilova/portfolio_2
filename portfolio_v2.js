// NAVIGATION HAMBURGER MENU
const hamburgerLines = document.querySelector(".hamburger-lines");
const navMenu = document.querySelector(".nav-menu");
const navMenuLinks = document.querySelectorAll(".nav-menu li");

hamburgerLines.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navMenuLinks.forEach(link => {
        link.classList.toggle("full-opacity");
    });
});

navMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        navMenuLinks.forEach(link => {
            link.classList.toggle("full-opacity");
        });
    });
});


// SCROLL TO TOP BUTTON
window.addEventListener("scroll", function() {
    let scroll = document.querySelector(".scrollToTop");
    scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

