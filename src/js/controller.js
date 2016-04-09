var ShopControl = function($scope, shopService) {

}




var CheckoutControl = function($scope, shopService) {

}






// $injections =============================================================
ShopControl.$inject = ['$scope', 'shopService'];
CheckoutControl.$inject = ['$scope', 'shopService']


// adding controller to app ================================================
app.controller('ShopControl', ShopControl);
app.controller('CheckoutControl', CheckoutControl)


