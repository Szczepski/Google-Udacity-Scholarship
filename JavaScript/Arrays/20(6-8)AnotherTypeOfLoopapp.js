var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

// Not working on Udacity console

// test.forEach(function addNumber100(num, index, test) {
//     num % 3 === 0 ? num += 100 : num = num;
//     test[index] = num;
// });
// console.log(test);

//Not working on Udacity
// test.forEach(function addNumber100(num, index, test) {
//     num % 3 === 0 ? test[index] += 100 : num = num;
// });
// console.log(test);

test.forEach(function addNumber100(num, index, array) {
    if (num % 3 === 0) {
      array[index] += 100;
    }
});
console.log(test);
