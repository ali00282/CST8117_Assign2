$(document).ready(function() {
    //remove item#1
    $("#remove1").on("click", function() {
        $(".cart-line1").remove();
        document.getElementById("p1").innerHTML == "";
    });

    //remove item#2
    $("#remove2").on("click", function() {
        $(".cart-line2").remove();
        document.getElementById("p2").innerHTML == "";
    });

    //remove item#3
    $("#remove3").on("click", function() {
        $(".cart-line3").remove();
        document.getElementById("p3").innerHTML == "";
    });
});

// $(document).ready(function() {
//     $("#remove3").on("click", function() {​​
//         $(".cart-line3").remove();
//     }​​);
//     $("#remove1").on("click", function() {​​
//         $(".cart-line1").remove();
//     }​​);

//     $("#remove2").on("click", function() {​​
//         $(".cart-line2").remove();
//     }​​);


// }​​);