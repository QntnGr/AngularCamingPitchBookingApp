document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".togglePopin");
    const closeButtons = document.querySelectorAll(".quit");
    const popins = document.querySelectorAll(".popin");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            popins.forEach(popin => {
                popin.classList.toggle("hidden");
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            popins.forEach(popin => {
                popin.classList.add("hidden");
            });
        });
    });
});
