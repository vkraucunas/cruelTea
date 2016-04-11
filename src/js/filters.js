app.filter('monies', function () {
  return function(input){
    return '$' + (input/100).toFixed(2)
  }
});

