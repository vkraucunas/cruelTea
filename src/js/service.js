app.service('teaService', [function(){
    this.teas = teaArray;
    this.cart = [];
    this.addToCart = function(tea) {
        this.cart.push(tea);
    }
}])