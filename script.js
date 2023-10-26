function updateUsernameDisplay() {
    const storedUsername = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("username-display");

    if (storedUsername) {
        usernameDisplay.textContent = storedUsername;
    } else {
        usernameDisplay.textContent = ""; 
    }
}
updateUsernameDisplay();

function redirectToCheckout() {
    document.getElementById("checkoutButton").innerText = "Redirecting...";

    window.location.href = "checkout.html";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username-input").value;
    localStorage.setItem("username", username);
    
    window.location.href = "index.html";    
    });