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