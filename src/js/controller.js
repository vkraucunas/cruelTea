var ShopControl = function($rootScope, $scope, teaService) {
    $scope.teas = teaService.teas;
    $scope.categories = teaService.categories;
    $scope.cart = teaService.getCart();
    $rootScope.cartSize = 0;
    $scope.addToCart = function(id, quantity) {
        teaService.addToCart(id, quantity);
        $rootScope.cartSize = teaService.getCartSize();
    };
}

var CheckoutControl = function($rootScope, $scope, teaService) {
    $scope.cart = teaService.getCart();
    $scope.editing = false;
    $scope.total = teaService.total();
    $scope.deleteItem = function(id) {
        teaService.deleteItem(id);
        $rootScope.cartSize = teaService.getCartSize();
        $scope.total = teaService.total();
    }
    $scope.editItem = function(id, quantity) {
        teaService.editItem(id, quantity);
        $scope.total = teaService.total();
    }

}

// $injections =============================================================
ShopControl.$inject = ['$rootScope','$scope', 'teaService'];
CheckoutControl.$inject = ['$rootScope', '$scope', 'teaService'];

// adding controller to app ================================================
app.controller('ShopControl', ShopControl);
app.controller('CheckoutControl', CheckoutControl);


