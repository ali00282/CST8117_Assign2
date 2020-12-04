/*function to change banner*/
var text = ["BIG XMAS SALE -50% OFF - LIMITED OFFER", "DUE TO THE COVID-19 OUR RETURN POLICY HAS CHANGED", "FREE SHIPPING ON ALL ORDERS OVER 100$"];
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
        document.getElementsByTagName("body")[0].style.Color = "black";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";
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