
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username or password is empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return false; // Prevent form submission
    }

    // You can add more complex validation logic here if needed

    return true; // Allow form submission
}
