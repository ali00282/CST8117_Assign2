/*function to change banner*/
var text = ["BIG XMAS SALE -50% OFF - LIMITED OFFER", "DUE TO THE COVID-19 OUR RETURN POLICY HAS CHANGED", "FREE SHIPPING ON ALL ORDERS OVER 100$"];
var counter = 0;
var inst = setInterval(change, 4000);

function change() {
<<<<<<< HEAD
    document.getElementById("changeBanner").innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
=======
  document.getElementById("changeBanner").innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
};
>>>>>>> 04c057c94e85f147bc16c440530160fb6eee6c7e

/* function for header slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
<<<<<<< HEAD
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
    //slides[slideIndex - 1].style.display = "block";
}
=======
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
};
>>>>>>> 04c057c94e85f147bc16c440530160fb6eee6c7e

/* change mode light/dark */

function changemode(mode) {

    if (mode == light) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
<<<<<<< HEAD
        document.getElementsByTagName("body")[0].style.Color = "black";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";
    }
}
=======
        document.getElementsByTagName("body")[0].style.color ="black";
    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";
    }
  };
>>>>>>> 04c057c94e85f147bc16c440530160fb6eee6c7e

/*chat window */

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open-button").style.display = "none";

<<<<<<< HEAD
}
=======
  };
>>>>>>> 04c057c94e85f147bc16c440530160fb6eee6c7e

function closeForm() {
    document.getElementById("open-button").style.display = "block";
    document.getElementById("myForm").style.display = "none";
<<<<<<< HEAD
}
/*cart items*/
/*calculate the total for each item*/
var module = (function() {

    var produits = [
        { brand: "Running", price: 120 },
        { brand: "T-Shirt", price: 30 },
        { brand: "Ball", price: 50 }
    ];
    return {

        pr: function() {

            var price1 = document.getElementById("p1").innerHTML;
            var qte1 = document.getElementById("q1").value;
            price1 = produits[0].price;
            var subproduct1 = price1 * qte1;
            document.getElementById("p1").innerHTML = subproduct1.toFixed(2);

            var price2 = document.getElementById("p2").innerHTML;
            var qte2 = document.getElementById("q2").value;
            price2 = produits[1].price;
            var subproduct2 = price2 * qte2;
            document.getElementById("p2").innerHTML = subproduct2.toFixed(2);

            var price3 = document.getElementById("p3").innerHTML;
            var qte3 = document.getElementById("q3").value;
            price3 = produits[2].price;
            var subproduct3 = price3 * qte3;
            document.getElementById("p3").innerHTML = subproduct3.toFixed(2);
        },
        subtotal: function(x) {
            var sub1 = Number(document.getElementById("p1").innerHTML);
            var sub2 = Number(document.getElementById("p2").innerHTML);
            var sub3 = Number(document.getElementById("p3").innerHTML);
            var subtotalall = sub1 + sub2 + sub3;
            document.getElementById("sub").innerHTML = subtotalall.toFixed(2);
        },
        tax: function() {
            var tax = document.getElementById("tx").innerHTML;
            var subtot = Number(document.getElementById("sub").innerHTML);
            var taxes = (subtot * 0.13);
            document.getElementById("tx").innerHTML = taxes.toFixed(2);
        },
        totalall: function() {
            var sub = Number(document.getElementById("sub").innerHTML);
            var tax = Number(document.getElementById("tx").innerHTML);
            var total = sub + tax;
            document.getElementById("tot").innerHTML = total.toFixed(2);
        }

    };
})();

document.getElementById("q1").addEventListener("click", function() {
    module.pr(0)
    module.subtotal(0)
    module.tax(0)
    module.totalall(0)
});
document.getElementById("q2").addEventListener("click", function() {
    module.pr(1)
    module.subtotal(1)
    module.tax(1)
    module.totalall(1)
});
document.getElementById("q3").addEventListener("click", function() {
    module.pr(2)
    module.subtotal(2)
    module.tax(2)
    module.totalall(2)
});

// remove button on the cart code

$(document).ready(function() {
    $("#remove1").on("click", function() {
        $(".cart-line1").remove();
    });
    $("#remove2").on("click", function() {
        $(".cart-line2").remove();
    });
    $("#remove3").on("click", function() {
        $(".cart-line3").remove();
    });
});
=======
  };

  /* form index page*/
  function checkin(){
    if (document.getElementById("email").value != ""){
     var youremail = document.getElementById("email").value;
     alert("Thank You for signing up. \n We sent the Promocode to " + youremail + " \n enjoy your christmas shopping with 8117-TEAM" );
     document.getElementById("email").innerHTML = "";
  }
};
>>>>>>> 04c057c94e85f147bc16c440530160fb6eee6c7e
