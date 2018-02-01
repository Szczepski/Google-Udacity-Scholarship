/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
emotions("happy", function laugh(num) {
    var output = "";
    for (var i = 0; i <= num; i++) {
        num > i ? output += "ha" : output += "!";
    }
    return output;
});
