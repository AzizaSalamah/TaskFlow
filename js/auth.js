
// LOGIN VALIDATION

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("loginMessage");

        if (!email || !password) {
            message.textContent = "Please fill all fields.";
            message.style.color = "red";
        }
        else if (password.length < 6) {
            message.textContent = "Password is too short.";
            message.style.color = "red";
        }
        else {
            message.textContent = "Input validation successful!";
            message.style.color = "green";
        }
    });
}


// SIGN UP VALIDATION

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirm = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;

        const message = document.getElementById("signupMessage");

        if (!name || !email || !password || !confirm) {
            message.textContent = "Please fill all fields.";
            message.style.color = "red";
        }
        else if (password.length < 6) {
            message.textContent = "Password must be at least 6 characters.";
            message.style.color = "red";
        }
        else if (password !== confirm) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
        }
        else if (!terms) {
            message.textContent = "Please accept the terms.";
            message.style.color = "red";
        }
        else {
            message.textContent = "Registration form is valid!";
            message.style.color = "green";
        }
    });
}
