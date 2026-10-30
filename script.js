
 // Class 15: Step 1: this file is running
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer
const yearElement = document.querySelector("#year");

// Lab 15 · Task 2: check that the year exists
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Class 15: Step 3: A button that changes the page
const themeButton = document.querySelector("#theme-toggle");

// Lab 15 · Task 2: check that the button exists
if (themeButton) {

    // Lab 15 · Task 4: restore the saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }

    // Lab 15 · Tasks 3 and 4: change the label and save the theme
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
}

 // Lab 15 · Task 5: a button that takes me back to the top
const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;

        formStatus.textContent = `Thank you for your message, ${name}! This form is a demonstration, so no message was sent.`;
        contactForm.reset();
    });
}
