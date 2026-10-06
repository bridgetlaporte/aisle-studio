"use strict";

let serviceButtons = document.querySelectorAll(".service-button");
let serviceOptions = document.querySelectorAll(".service-option");

// Switch -- Hides the service and display the service selected by the user.
function showService(serviceId){
    for (let i = 0; i < serviceOptions.length; i++){
        serviceOptions[i].classList.remove("active-service");
    }
    document.getElementById(serviceId).classList.add("active-service");
}

// service button displays its service and updates to be the active button.
for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].addEventListener("click", function(event){
        let selectedService = event.target.getAttribute("data-service");
        showService(selectedService);
        for (let j = 0; j < serviceButtons.length; j++){
            serviceButtons[j].classList.remove("active");
        }
        event.target.classList.add("active");
    });
}

