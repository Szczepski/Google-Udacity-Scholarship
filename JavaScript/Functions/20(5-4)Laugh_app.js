
var laugh = function(number) {
    var output = "";
    for (var i = 1; i <= number; i++) {
      number == i ? output += "ha!" : output += "ha"
    }
    return output;
}
console.log(laugh(10));
