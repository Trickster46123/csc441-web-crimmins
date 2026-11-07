

// Class 15: Step 1: this file is running
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    // Lab 15 · Task 4: remember the selected theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }

    // Lab 15 · Tasks 3 and 4: switch the theme and save it
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

// Lab 15 · Task 5: back-to-top button
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

if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // Lab 16 · Task 1: check the message before accepting it
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Lab 16 · Task 4: check the name too
        if (name.length < 2) {
            formStatus.textContent = "Please enter at least 2 characters for your name.";
            formStatus.classList.add("error");
            return;
        }

        if (message.length < 10) {
            formStatus.textContent = "Please write a bit more, at least 10 characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        // Class 18: Step 3: submit the validated message
        formStatus.textContent = "Thanks, " + name + ". Sending your message.";
        contactForm.submit();
    });

    // Lab 16 · Task 2: clear the error when the user starts fixing it
    contactForm.addEventListener("input", function() {
        if (formStatus.classList.contains("error")) {
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }
    });
}
