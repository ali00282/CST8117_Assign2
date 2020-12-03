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

/* function for header slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
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

/*cart code */


function calcSum() {
    var total = 0;
    var subTotal = 0;
    var taxVal = 0;
    var TAX = 0.08
    for (i = 1; i < 3; i++) {
        q = document.getElementById("q-" + i);
        p = document.getElementById("p-" + i);
        qty = q.value;
        price = parseInt(p.innerText.replace('$', ''));
        console.log(price);
        subTotal += qty * price;
    }
    console.log(qty);

    sub = document.getElementById("sub");
    tot = document.getElementById("tot");
    tax = document.getElementById("tx");
    taxVal = subTotal * TAX;
    tax.innerText = taxVal;
    total = subTotal + taxVal;
    sub.innerText = subTotal;
    tot.innerText = total;
}

function inputClick(e) {
    console.log(e.value);
    calcSum();
}