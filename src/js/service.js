app.service('teaService', [function(){
    this.teas = teaArray;
    this.categories = categories;
    this.cart = [];
    this.getCart = function() {
        return this.cart;
    }
    this.addToCart = function(tea) {
        console.log(tea);
        this.cart.push(tea);
        console.log(this.cart);
    }
    this.removeFromCart = function(tea) {
        var index = this.cart.indexOf(tea);
        this.cart.splice(index, 1);
    }
}])