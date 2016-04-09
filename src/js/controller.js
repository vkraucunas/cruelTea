var ShopControl = function($scope, teaService) {
    $scope.teas = teaService.teas;
}


var CheckoutControl = function($scope, teaService) {

}



// $injections =============================================================
ShopControl.$inject = ['$scope', 'teaService'];
CheckoutControl.$inject = ['$scope', 'teaService']


// adding controller to app ================================================
app.controller('ShopControl', ShopControl);
app.controller('CheckoutControl', CheckoutControl)


