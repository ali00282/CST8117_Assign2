function validate(e) {

    e.preventDefault();

    var valid = true;

    var email = "cst8117@project.ca";
    var pass = "8117"

    if (loginForm.username.value != email) {
        document.loginForm.username.style.backgroundColor = "red";
        document.querySelector('#usernameValidation').innerHTML = "*Please enter a correct username*";
        valid = false;
    }

    if (loginForm.password.value != pass) {
        document.loginForm.password.style.backgroundColor = "red";
        document.querySelector('#passwordValidation').innerHTML = "*Please enter a password*";
        valid = false;
    }

    if (valid) {
        window.location = "index1.html";
    }

    return valid;

};


document.querySelector('#username').addEventListener("blur", function() {
    if (this.value !== "" && this.value === "cst8117@project.ca") {
        document.loginForm.username.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        usernameValidation.innerHTML = "";
    }
});

document.querySelector('#password').addEventListener("blur", function() {
    if (this.value !== "" && this.value === "8117") {
        document.loginForm.password.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        passwordValidation.innerHTML = "";
    }
});

document.loginForm.addEventListener("submit", validate);