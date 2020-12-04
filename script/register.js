var check = true;

function validate(e) {

    e.preventDefault();

    var valid = true;

    if (loginForm.username.value === "") {
        document.loginForm.username.style.backgroundColor = "red";
        document.querySelector('#usernameValidation').innerHTML = "*Please enter a username*";
        valid = false;
        check = false;
    }

    if (loginForm.email.value === "") {
        document.loginForm.email.style.backgroundColor = "red";
        document.querySelector('#emailValidation').innerHTML = "*Please enter an email*";
        valid = false;
        check = false;
    }

    if (loginForm.password.value === "") {
        document.loginForm.password.style.backgroundColor = "red";
        document.querySelector('#passwordValidation').innerHTML = "*Please enter a username*";
        valid = false;
        check = false;
    }

    if (loginForm.passwordCheck.value === "") {
        document.loginForm.passwordCheck.style.backgroundColor = "red";
        document.querySelector('#passCheckValidation').innerHTML = "*Password check must be same as password*";
        valid = false;
        check = false;
    }
    if (loginForm.passwordCheck.value != loginForm.password.value) {
        document.loginForm.passwordCheck.style.backgroundColor = "red";
        document.querySelector('#passCheckValidation').innerHTML = "*Password does not match*";
        valid = false;
        check = false;
    }

    if (valid) {
        alert("You have successfully registered with us!!!");
        window.location = "index1.html";
    }

    check = true;
    return valid;

};

document.querySelector('#username').addEventListener("blur", function() {
    if (this.value !== "") {
        document.loginForm.username.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        usernameValidation.innerHTML = "";
    }
});

document.querySelector('#email').addEventListener("blur", function() {
    if (this.value !== "") {
        document.loginForm.email.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        emailValidation.innerHTML = "";
    }
});

document.querySelector('#password').addEventListener("blur", function() {
    if (this.value !== "") {
        document.loginForm.password.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        passwordValidation.innerHTML = "";
    }
});

document.querySelector('#passwordCheck').addEventListener("blur", function() {
    if (this.value !== "") {
        document.loginForm.passwordCheck.style.backgroundColor = " rgba(61, 230, 108, 0.387)";
        passCheckValidation.innerHTML = "";
    }

});

document.loginForm.addEventListener("submit", validate);