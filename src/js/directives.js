app.directive('navBarDirective', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/directives/navBar.html'
    }
})


app.directive('caffeine', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/directives/caffeine.html'
    }
})