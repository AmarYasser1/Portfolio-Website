// For toggle container
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})

// For validation User
let signInEmail = document.getElementById("input-sign-in-email");
let signInPassword = document.getElementById("input-sign-in-password");

let signUpName = document.getElementById("input-sign-up-name");
let signUpEmail = document.getElementById("input-sign-up-email");
let signUpPassword = document.getElementById("input-sign-up-password");

document.getElementById("sign-up-button").onclick = function (e) {
    e.preventDefault();

    if (signUpName.value && signUpEmail.value && signUpPassword.value) {
        localStorage.setItem("userName" , signUpName.value);
        localStorage.setItem("userEmail" , signUpEmail.value);
        localStorage.setItem("userPassword", signUpPassword.value);

        alert("Sign-up successful! You can now sign in.");
    }else{ 
        alert("Please enter valid email and password.");
    }
}


document.getElementById("sign-in-button").onclick = function (e) {
    e.preventDefault();

    if (signInEmail.value === localStorage.getItem("userEmail") && signInPassword.value === localStorage.getItem("userPassword")) {
        alert("Sign-in successful! Redirecting to your dashboard...");
        window.location.href = "http://127.0.0.1:5500/index.html";
    }else {
        alert("Invalid email or password. Please try again.");
    }
}