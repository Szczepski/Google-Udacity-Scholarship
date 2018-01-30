/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

// Opcja I
donuts.forEach(donut => {
    let print = donut.type + " donuts cost $" + donut.cost + " each";
    console.log(print);
});


// Opcja II
// donuts.forEach(function(donut) {
//     let print = donut.type + " donuts cost $" + donut.cost + " each";
//     console.log(print);
// });


// Opcja III
// var printDonuts = function () {
//   donuts.forEach(donut => {
//       let print = donut.type + " donuts cost $" + donut.cost + " each";
//       console.log(print);
//   });
// }

// printDonuts();


// Opcja III
// function printDonuts() {
//   donuts.forEach(donut => {
//     let print = donut.type + " donuts cost $" + donut.cost + " each";
//     console.log(print);
//   })
// }
//
// printDonuts();
