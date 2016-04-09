app.directive('navBarDirective', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/directives/navBar.html',
    }
})