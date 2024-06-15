document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".togglePopin, .quit");
    const popins = document.querySelectorAll(".popin");
    
    function addEventListeners(elements, eventHandler) {
        elements.forEach(element => {
            element.addEventListener("click", eventHandler);
            element.addEventListener("touchend", eventHandler);
        });
    }
    
    function handleEvent(event) {
        if (event.type === "touchend") {
            event.preventDefault();
        }
    
        if (event.type === "click" || event.type === "touchend") {
            togglePopins();
        }
    }
    
    function togglePopins() {
        popins.forEach(popin => {
            popin.classList.toggle("hidden");
        });
    }
    
    addEventListeners(buttons, handleEvent);
    
});
