app.service('teaService', [function(){
    this.teas = teaArray;
    this.categories = categories;
    this.cart = {};
    this.total = 0;
    this.getCart = function() {
        return this.cart;
    };
    this.addToCart = function(id, quantity) {
        var teaToAdd = this.teas.filter(function(el) {
            return id === el._id;
        })[0];
        teaToAdd.quantity = 0;

        var id = teaToAdd._id;
        if (!this.cart[id]) {
            this.cart[id] = teaToAdd;
        }
        this.cart[id].quantity += Number(quantity);
    };
    this.deleteItem = function(id) {
        delete this.cart[id];
    };
    this.editItem = function(id, quantity) {
        this.cart[id].quantity = Number(quantity);
    };
}])