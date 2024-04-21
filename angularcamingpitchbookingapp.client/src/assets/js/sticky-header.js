document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".container-header");

    window.addEventListener("scroll", function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll >= 400) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
