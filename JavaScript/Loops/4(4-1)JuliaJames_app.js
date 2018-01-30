/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    x % 3 === 0 ? (x % 5 === 0 ? console.log("JuliaJames") : console.log("Julia")) : (x % 5 === 0 ? console.log("James") : console.log(x));
    x++;
}
