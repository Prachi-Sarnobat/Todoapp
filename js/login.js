const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const title = document.getElementById('formTitle');
const toggleText = document.getElementById('toggleText');
const error = document.getElementById('error');

function toggleForm() {
    error.innerText = "";

    if (loginForm.style.display !== "none") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        title.innerText = "Register";
        toggleText.innerText = "Already have an account?";
        document.querySelector(".switch a").innerText = "Login";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        title.innerText = "Login";
        toggleText.innerText = "Don't have an account?";
        document.querySelector(".switch a").innerText = "Register";
    }
}

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "prachisarnobatsarnobat@gmail.com" && password === "prachu@12"){
        window.location.href = "index.html";
    } else {
        error.innerText = "Invalid email or password!";
    }
});

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Registered successfully! Now login.");
    toggleForm();
});