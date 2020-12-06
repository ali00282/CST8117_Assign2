/*function to change banner*/
var text = ["Chrismas offers Limited time offers", "Welcome Gift ...", "Free shipping for orders over 100$"];
var counter = 0;
var inst = setInterval(change, 4000);

function change() {
    document.getElementById("changeBanner").innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

// function for forms 

const form = document.getElementsById('form');
const Username = document.getElementsById('username');
const email = document.getElementsById('email');
const Password = document.getElementsById('Password');
const Password2 = document.getElementsById('password2');

form.addEventListener('submit', (e) => {
    e.preventDeault();
    checkInputs();

});

function checkInputs() {
  // get the values from the inputs 
  const UsernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const PasswordValue = Password.value.trim();
  const Password2Value = Password2.value.trim();

  if(UsernameValue === '') {
    // show error 
    // add error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    // add success class 
    setSuccessFor(username);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if(PasswordValue === '') {
    setSuccessFor(Password, 'Password cannot be blank');
  } else {
    setSuccessFor(Password)
  }

  if(Password2Value === '') {
    setSuccessFor(Password2, 'Password2 can not be blank');
  } else if(PasswordValue !== Password2Value) {
    setErrorFor(Password2, 'password2 does not match')
  } else {
    setSuccessFor(Password2);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');
  //  add error massage inside small 
  small.innerText = message;

  // add error class 
  formControl.className = 'form-control error';
}
 
function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control
  formControl.className = 'form-control success';
}


/*chat window */

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open-button").style.display = "none";

}

function closeForm() {
  document.getElementById("open-button").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}
