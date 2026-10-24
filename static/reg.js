function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    // Check if username, email, password, or confirm password is empty
    if (username.trim() === "") {
        alert("Please enter a username.");
        return false; // Prevent form submission
    }

    if (email.trim() === "") {
        alert("Please enter an email.");
        return false; // Prevent form submission
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false; // Prevent form submission
    }

    if (confirm_password.trim() === "") {
        alert("Please confirm your password.");
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirm_password) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Check if password length is at least 6 characters
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false; // Prevent form submission
    }

    // If all validations pass, allow form submission
    return true;
}
