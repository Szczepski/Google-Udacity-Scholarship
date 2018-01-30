
function laugh(num) {

  var output = "";
    for (var i = 0; i <= num ; i++) {
          i < num ? (output += "ha") : output += "!";
      }
      return output;
  }
console.log(laugh(10));
