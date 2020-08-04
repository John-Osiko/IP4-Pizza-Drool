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
            total = price + crust_price + topping_value + soda_price;
            console.log(total);