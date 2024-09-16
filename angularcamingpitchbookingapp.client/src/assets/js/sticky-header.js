document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let header = document.querySelector(".container-header");
        let scroll = window.scrollY || document.documentElement.scrollTop;
        if (scroll >= 400) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
