var price, crust_price, topping_price, soda_price;
let total = 0;

function pizza(flavour, size, crust, topping, soda, total) {
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.soda = soda;
    this.total = total;
} //Get inputs
$("button.proceed").click(function(event) {
let myflavour = $("#flavour option:selected").val();
let mysize = $("#size option:selected").val();
let mycrust = $("#crust option:selected").val();
let mysoda = $("#soda option:selected").val();
let mytopping = [];
$.each($("input[name='toppings']:checked"), function() {
    mytopping.push($(this).val());
});
console.log(mytopping.join(", "));

//Function order
let order = (myflavour, mysize, mycrust, mysoda, mytopping, total) => {
    return { myflavour, mysize, mycrust, mysoda, mytopping, total };
};
switch (mysize) {
    case "0":
        price = 0;
        break;
    case "large":
        price = 1200;
        console.log(price);
        break;
    case "medium":
        price = 850;
        console.log("The price is " + price);
        break;
    case "small":
        price = 600;
        console.log(price);
    default:
        console.log("error");
}
switch (mycrust) {
    case "0":
        crust_price = 0;
        break;
    case "Crispy":
        crust_price = 200;
        break;
    case "Stuffed":
        crust_price = 250;
        break;
    case "Gluten-free":
        crust_price = 180;
        break;
    default:
        console.log("No price");
}
switch (mysoda) {
    case "0":
        soda_price = 0;
        break;
    case "water":
        soda_price = 120;
        console.log(soda_price);
        break;
    case "soda":
        soda_price = 140;
        console.log("The price is " + soda_price);
        break;
    case "juice":
        soda_price = 180;
        console.log(soda_price);
    default:
        console.log("error");
}
let topping_value = mytopping.length * 50;
console.log("toppings value" + topping_value);
if ((mysize == "0") && (mycrust == "0")) {
    console.log("nothing selected");
    $("button.proceed").show();
    $("#information").show();
    $("div.choice").hide();
    alert("Please select pizza size and crust");
} else {
    $("button.proceed").hide();
    $("#information").hide();
    $("div.choice").slideDown(1500);
}
total = price + crust_price + soda_price + topping_value;
console.log(total);

let checkoutTotal = 0;
checkoutTotal = checkoutTotal + total;
$("#pizzaname").html($("#flavour option:selected").val());
$("#pizzasize").html($("#size option:selected").val());
$("#pizzacrust").html($("#crust option:selected").val());
$("#pizzasoda").html($("#soda option:selected").val());
$("#pizzatopping").html(mytopping.join(", "));
$("#totals").html(total); // Add pizza button
$("button.addPizza").click(function() {
    let myflavour = $("#flavour option:selected").val();
    let mysize = $("#size option:selected").val();
    let mycrust = $("#crust option:selected").val();
    let mysoda = $("#soda option:selected").val();
    let mytopping = [];
    $.each($("input[name='toppings']:checked"), function() {
        mytopping.push($(this).val());
    });
    console.log(mytopping.join(", "));
    switch (mysize) {
        case "0":
            price = 0;
            break;
        case "large":
            price = 1200;
            console.log(price);
            break;
        case "medium":
            price = 850;
            console.log("The price is " + price);
            break;
        case "small":
            price = 600;
            console.log(price);
        default:
            console.log("error");
    }
    switch (mycrust) {
        case "0":
            crust_price = 0;
            break;
        case "Crispy":
            crust_price = 200;
            break;
        case "Stuffed":
            crust_price = 150;
            break;
        case "Gluten-free":
            crust_price = 180;
            break;
        default:
            console.log("No price");
    }
    switch (mysoda) {
        case "0":
            soda_price = 0;
            break;
        case "water":
            soda_price = 120;
            console.log(soda_price);
            break;
        case "soda":
            soda_price = 140;
            console.log("The price is " + soda_price);
            break;
        case "juice":
            soda_price = 180;
            console.log(price);
        default:
            console.log("error");
    }
    let topping_value = mytopping.length * 50;
    console.log("toppings value" + topping_value);
    total = price + crust_price + soda_price + topping_value;
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);

    // constructor function
    var newOrder = new pizza(myflavour, mysize, mycrust, mysoda, mytopping, total);

    $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.flavour + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + '</td><td id="pizzasoda">' + newOrder.soda + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
    console.log(newOrder);


}); // Checkout button
$("button#checkout").click(function() {
    $("button#checkout").hide();
    $("button.addPizza").hide();
    $("button.deliver").slideDown(1500);
    $("#addedprice").slideDown(1500);
    console.log("Your total bills is sh. " + checkoutTotal);
    $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
});

// home delivery button
$("button.deliver").click(function() {
    $(".pizzatable").hide();
    $(".choise h2").hide();
    $(".delivery").slideDown(1500);
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#pizzatotal").hide();
    let deliveryamount = checkoutTotal + 150;
    console.log("You will pay sh. " + deliveryamount + " on delivery");
    $("#totalbill").append("Your bill plus delivery fee is: " + deliveryamount);
}); // when one clicks place order button
$("button#final-order").click(function(event) {
    event.preventDefault();

    $("#pizzatotal").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let deliveryamount = checkoutTotal + 150;
    console.log("Final Bill is: " + deliveryamount);
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
    } else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
    }
});
event.preventDefault();
});
});