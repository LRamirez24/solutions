// solutions to common problems
// question 1 return number of times a number appears in an array
// solution 1

var list = [2,2,3,4,4,4,4,3,1,9];

var counting = function(array,numbers) {
  var count = 0;
  for(var i = 0; i < array.length; i++) {
    if(array[i] === numbers) {
      count++;
    }
  }
  return count;
}; 

// solution 2
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);

// question 2 
// make a function that factorialize a given number

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

// question 3 
// make function that takes in a radius and prints out the area and perimeter of a circle
// solution 1 
function math(r) {
    const PI = Math.PI;
    const area = PI * Math.pow(r,2);
    const perimeter = 2 * PI * r;
    console.log(area);
    console.log(perimeter);
} 
 // solution 2 prints out only 3 significant digits
 
 function math(r) {
    const PI = Math.PI;
    let area = PI * Math.pow(r,2);
area = area.toFixed(2);
    let perimeter = 2 * PI * r;
 perimeter = perimeter.toFixed(2);
    console.log(area);
    console.log(perimeter);
} 

