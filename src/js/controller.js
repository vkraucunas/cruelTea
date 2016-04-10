var ShopControl = function($scope, teaService) {
    $scope.teas = teaService.teas;
    $scope.categories = teaService.categories;
    $scope.cart = teaService.getCart();
    $scope.cartSize = $scope.cart.length;
    $scope.teaProduct = {
        name: '',
        img: '',
        ingredients: '',
        rating: '',
        caffeine: '',
        quantity: 0
    };
    $scope.addToCart = function() {
        teaService.addToCart($scope.teaProduct);
        $scope.teaProduct = {
            name: '',
            img: '',
            ingredients: '',
            rating: '',
            caffeine: '',
            quantity: 0
        };
    };
}


var CheckoutControl = function($scope, teaService) {

}



// $injections =============================================================
ShopControl.$inject = ['$scope', 'teaService'];
CheckoutControl.$inject = ['$scope', 'teaService']


// adding controller to app ================================================
app.controller('ShopControl', ShopControl);
app.controller('CheckoutControl', CheckoutControl)


