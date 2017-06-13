var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


console.log(integers);

integers.sort(function(a,b) {
	return a - b;
});
console.log(integers);

let moreThan19 = integers.filter( function(integers) {
	return integers > 19;
});

console.log(moreThan19);

integers.forEach(function(number) {
	return integers * 1.5; 
});
console.log(integers);


function multiply(input) {
    return input * 1.5;
}
function subtraction(input) {
	return input -1;
}
var newIntegers = integers.map(multiply);
console.log(newIntegers);

var newIntegers2 = newIntegers.map(subtraction);
console.log(newIntegers2);

var what = integers.map(multiply).map(subtraction);
console.log(what);
