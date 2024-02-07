// Accordeon JS
//Waiting for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function () {

    //select all accordion Elements
    const accElements = document.querySelectorAll(".accordion");

    //add an Eventlistener to each accordion element
    accElements.forEach(element => {
        element.addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });        
    });
});