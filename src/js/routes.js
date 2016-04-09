app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'ShopControl'
    })
    .when('/checkout', {
        templateUrl: 'templates/checkout.html',
        controller: 'CheckoutControl'
    })
    .otherwise('/');
});