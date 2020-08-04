var price, crust_price, topping_price, soda_price;
let total = 0;

function pizza(flavour, size, crust, topping, soda, total) {
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.soda = soda;
    this.total = total;
}