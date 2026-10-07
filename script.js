"use strict";
// required ^

// -------------------- SERVICES --------------------
let serviceButtons = document.querySelectorAll(".service-button");
let serviceOptions = document.querySelectorAll(".service-option");

// Switch -- Hides the service and shows only the service selected by the user.
function showService(serviceId){
    for (let i = 0; i < serviceOptions.length; i++){
        serviceOptions[i].classList.remove("active-service");
    }
    document.getElementById(serviceId).classList.add("active-service");
}

// The buttons all have a value to match their corresponding service. When clicked, the button displays its service and updates to be the active button.
for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].addEventListener("click", function(event){
        
        let selectedService = event.target.getAttribute("data-service");
        showService(selectedService);

        // Removes the active style from every button before adding it to the button that was clicked.
        for (let j = 0; j < serviceButtons.length; j++){
            serviceButtons[j].classList.remove("active");
        }
        event.target.classList.add("active");
    });
}


// -------------------- DARK MODE -------------------- 
// toggles the dark mode class on the body so css can adjust colors
// the text changes to the current mode so the user knows what mode they will switch to when they click it
let themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "Light Mode";
    }
    else{
        themeToggle.textContent = "Dark Mode";
    }
});




// -------------------- LUCKY DRAW (like snake eyes) --------------------
// Use the random number formula from our class example so both 1 and 10 can be included as possible numbers in the game.
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playLuckyDraw(e){
    // stops the form from submitting before the inputs are validated
    e.preventDefault();

    let guessInput = document.getElementById("guess");
    let errorMessage = document.getElementById("guessError");
    let gameOutput = document.getElementById("gameOutput");
    let userNumber = document.getElementById("userNumber");
    let ourNumber = document.getElementById("ourNumber");
    let gameMessage = document.getElementById("gameMessage");

    // read as strings so change to numbers for comparison to the random number
    let userGuess = parseFloat(guessInput.value);

    // assumes is valid, changes if not valid and is set to false
    let isValid = true;

    // clears errors before checking the new guess, no leftover feedback on the page
    guessInput.classList.remove("errorInput");
    errorMessage.classList.remove("error");
    gameOutput.classList.add("hidden");

    // makes sure guess is whole number between 1 and 10. Makes devimals invalid 
    if(guessInput.value === "" || isNaN(userGuess) || userGuess < 1 || userGuess > 10 || userGuess !== parseInt(userGuess)){
        guessInput.classList.add("errorInput");
        errorMessage.classList.add("error");
        isValid = false;
    }

    // if the user num is valid, generates a random number
    if(isValid){
        let randomNumber = getRandomNumber(1, 10);

        userNumber.innerHTML = userGuess;
        ourNumber.innerHTML = randomNumber;

        // checks if the numbers match and shows the correct message
        if(userGuess === randomNumber){
            gameMessage.innerHTML = "You matched our number! You win!";
        }else{
            gameMessage.innerHTML = "Not quite! Try again!";
        }

        gameOutput.classList.remove("hidden");
    }
}

document.getElementById("luckyForm").addEventListener("submit", playLuckyDraw);











// -------------------- CONTACT FORM --------------------
// use tb 5.5 covers forms  - regex for email and phone validation

function validateContact(e){
    // stops the form from submitting before the inputs are checked
    e.preventDefault();

    let contactForm = document.getElementById("contactForm");
    let fullNameInput = document.getElementById("fullName");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    let contactEmail = document.getElementById("contactEmail");
    let contactPhone = document.getElementById("contactPhone");
    let commentsInput = document.getElementById("comments");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let contactMethodError = document.getElementById("contactMethodError");
    let commentsError = document.getElementById("commentsError");

    let contactSuccess = document.getElementById("contactSuccess");
    let contactOutput = document.getElementById("contactOutput");

    // regular expressions for email and phone, checks format before accepting
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;

    // keeps track if valid, if fails it sets to false
    let isValid = true;

    // clear messages before validating again, removes old messages 
    fullNameInput.classList.remove("errorInput");
    emailInput.classList.remove("errorInput");
    phoneInput.classList.remove("errorInput");
    commentsInput.classList.remove("errorInput");

    nameError.classList.remove("error");
    emailError.classList.remove("error");
    phoneError.classList.remove("error");
    contactMethodError.classList.remove("error");
    commentsError.classList.remove("error");

    // hide message before a new submission, old message is removed so the user can see the new message
    contactSuccess.classList.add("hidden");
    contactOutput.innerHTML = "";

    // trim() makes sure a name made of blank spaces is not valid
    if(fullNameInput.value.trim() === ""){
        fullNameInput.classList.add("errorInput");
        nameError.classList.add("error");
        isValid = false;
    }

    // trim() makes sure comments made of blank spaces is not valid
    if(commentsInput.value.trim() === ""){
        commentsInput.classList.add("errorInput");
        commentsError.classList.add("error");
        isValid = false;
    }

    // the user must choose a preferred contact method - determines which one is required 
    if(contactEmail.checked === false && contactPhone.checked === false){
        contactMethodError.classList.add("error");
        isValid = false;
    }

    // only require and validate email when it is selected
    if(contactEmail.checked){
        if(emailInput.value === "" || !emailRegex.test(emailInput.value)){
            emailInput.classList.add("errorInput");
            emailError.classList.add("error");
            isValid = false;
        }
    }

    // only require and validate phone when it is selected
    if(contactPhone.checked){
        if(phoneInput.value === "" || !phoneRegex.test(phoneInput.value)){
            phoneInput.classList.add("errorInput");
            phoneError.classList.add("error");
            isValid = false;
        }
    }

    // if everything is valid, displays it - all parts above must be valid 
    if(isValid){
        let preferredMethod = "";
        let preferredContact = "";

        // sets the preferred contact method and the value to display based on what the user selected
        if(contactEmail.checked){
            preferredMethod = "Email";
            preferredContact = emailInput.value;
        }else{
            preferredMethod = "Phone";
            preferredContact = phoneInput.value;
        }

        // creates a customer object with the validated information - this is displayed to the user in the contactOutput section of the page
        let customer = {
            name: fullNameInput.value,
            contactMethod: preferredMethod,
            contactInfo: preferredContact,
            comments: commentsInput.value
        };

        contactOutput.innerHTML =
            `<strong>Name:</strong> ${customer.name}<br>
            <strong>Preferred Contact:</strong> ${customer.contactMethod}<br>
            <strong>${customer.contactMethod}:</strong> ${customer.contactInfo}<br>
            <strong>Wedding Details:</strong> ${customer.comments}`;

        contactSuccess.classList.remove("hidden");

        // clears the form after submission
        contactForm.reset();
    }
}

document.getElementById("contactForm").addEventListener("submit", validateContact);