var ShopControl = function($scope, teaService) {
    $scope.teas = teaService.teas;
    $scope.categories = teaService.categories;
    $scope.cart = teaService.getCart();
    $scope.cartSize = Object.keys($scope.cart).length
    $scope.addToCart = function(id, quantity) {
        teaService.addToCart(id, quantity);
    };
}


var CheckoutControl = function($scope, teaService) {
    $scope.cart = teaService.getCart();
    $scope.editing = false;
    $scope.deleteItem = function(id) {
        teaService.deleteItem(id);
    }
    $scope.editItem = function(id, quantity) {
        teaService.editItem(id, quantity);
    }
}



// $injections =============================================================
ShopControl.$inject = ['$scope', 'teaService'];
CheckoutControl.$inject = ['$scope', 'teaService']


// adding controller to app ================================================
app.controller('ShopControl', ShopControl);
app.controller('CheckoutControl', CheckoutControl)


