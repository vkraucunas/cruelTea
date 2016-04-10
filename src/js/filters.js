app.filter('monies', function () {
  return function(input){
    var cents = input.toString().split('').splice(input.length-2, 2).join('');
    var dollars = input;
    input = '$' + dollars + '.' + cents;
    return input;
  }
});

