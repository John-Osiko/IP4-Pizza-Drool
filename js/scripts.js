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