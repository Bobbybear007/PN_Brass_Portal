let LoginForm; // Declare LoginForm in the global scope

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
};

function validateLoginForm() {
    // Perform your form validation here
    // Return true if the form is valid, false otherwise
    // Example validation:
    const username = LoginForm.querySelector("#login-username").value;
    const password = LoginForm.querySelector("#login-password").value;

    // Perform your validation logic here, for example:
    if (username.trim() === "" || password.trim() === "") {
        return false; // Invalid form
    };

    return true; // Valid form
};

document.addEventListener("DOMContentLoaded", () => {
    LoginForm = document.querySelector("#login"); // Assign LoginForm inside the DOMContentLoaded event listener
    const CreateAccountForm = document.querySelector("#CreateAccount");
    const linkLogin = document.querySelector("#LinkLogin");

    document.querySelector("#LinkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.add("form--hidden");
        CreateAccountForm.classList.remove("form--hidden");
        // Show the "Already have an account? Sign In" link
        linkLogin.style.display = "inline";
    });

    document.querySelector("#LinkLogin").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
        // Hide the "Already have an account? Sign In" link
        linkLogin.style.display = "none";
    });

    document.querySelector("#LinkLoginCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
        // Hide the "Already have an account? Sign In" link
        linkLogin.style.display = "none";
    });

    LoginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Validate the form
        const isValid = validateLoginForm();

        if (!isValid) {
            setFormMessage(LoginForm, "error", "Invalid username/password combination");
        } else {
            // Redirect to another HTML file or new page after successful login
            window.location.href = "home.html";
        }
    });
});
