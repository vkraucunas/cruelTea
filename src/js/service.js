app.service('teaService', [function(){
    this.teas = teaArray;
    this.categories = categories;
    this.cart = {};
    this.total = function() {
        var result = 0;
        for (var el in this.cart) {
            result += (Number(this.cart[el].price) * Number(this.cart[el].quantity));
        }
        return result;
    }
    this.getCart = function() {
        return this.cart;
    };
    this.getCartSize = function() {
        return Object.keys(this.cart).length;
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
        this.total();
    };
    this.deleteItem = function(id) {
        delete this.cart[id];
        this.total();
    };
    this.editItem = function(id, quantity) {
        this.cart[id].quantity = Number(quantity);
        this.total();
    };
}])