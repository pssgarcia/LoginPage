// Setting the form message
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-${type}`);
};

// Input error message
function setInputError(inputElement, message) {
    inputElement.classList.add("input-error");
    inputElement.parentElement.querySelector(".input-error-message").textContent = message;
}

// Clearing the error message after the user continues typing
function clearInputError(inputElement) {
    inputElement.classList.remove("input-error");
    inputElement.parentElement.querySelector(".input-error-message").textContent = "";
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm");
    const createAccountForm = document.querySelector("#createAccountForm");

    // Hide loginForm and show createAccount 
    document.querySelector("#linkCreateAccount").addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    // Hide createAccount and show loginForm 
    document.querySelector("#linkLogin").addEventListener('click', (e) => {
        e.preventDefault();
        createAccountForm.classList.add("form-hidden");
        loginForm.classList.remove("form-hidden");
    }); 

    // When submitted, if user doesn't fill up inputs, show error message
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(e);
        setFormMessage(loginForm,"error", "Invalid username/password combination")
    })

    // For each input element, when it is in blur(not focus on itself), show error message under the following conditions
    document.querySelectorAll(".input").forEach(inputElement => {
        inputElement.addEventListener("blur", (e) => { 
                if (e.target.id = "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                    setInputError(inputElement, "Username must be at least 5 characters in length");
                }  
        })
        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        })
    })
})  