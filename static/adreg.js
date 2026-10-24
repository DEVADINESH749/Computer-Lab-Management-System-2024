function validateForm() {
    console.log("validateForm function called"); // Add this line for debugging
    var username = document.forms["myform"]["username"].value;
    var password = document.forms["myform"]["pw"].value;
    var confirmPassword = document.forms["myform"]["cp"].value;
    var email = document.forms["myform"]["email"].value;
    var errorMessage = "";

    // Check if username is empty
    if (username.trim() == "") {
        errorMessage += "Username must be filled out<br>";
    }

    // Check if password is empty
    if (password.trim() == "") {
        errorMessage += "Password must be filled out<br>";
    }

    // Check if confirmPassword is empty
    if (confirmPassword.trim() == "") {
        errorMessage += "Confirm Password must be filled out<br>";
    }

    // Check if email is empty
    if (email.trim() == "") {
        errorMessage += "Email must be filled out<br>";
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match<br>";
    }

    // Check if password length is at least 6 characters
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long<br>";
    }

    // Display error messages
    if (errorMessage !== "") {
        document.getElementById("error-message").innerHTML = errorMessage;
        return false;
    }

    // Clear error messages if no errors
    document.getElementById("error-message").innerHTML = "";

    return true;
}
