app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/checkout', {
        templateUrl: 'templates/checkout.html',
        controller: 'CheckoutControl'
    })
    .otherwise('/');
});