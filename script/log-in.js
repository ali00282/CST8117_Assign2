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
const Password = document.getElementsById('Password');

form.addEventListener('submit', (e) => {
    e.preventDeault();
    checkInputs();

});

function checkInputs() {
  // get the values from the inputs 
  const UsernameValue = username.value.trim();
  const PasswordValue = Password.value.trim();

  if(UsernameValue === '') {
    // show error 
    // add error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    // add success class 
    setSuccessFor(username);
  }

  if(PasswordValue === '') {
    setSuccessFor(Password, 'Password cannot be blank');
  } else {
    setSuccessFor(Password)
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

/* change mode light/dark */

function changemode(mode) {

    if (mode == light) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }
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
