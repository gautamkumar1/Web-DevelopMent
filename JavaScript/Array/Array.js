// Create array
// let a = [1,2,3,"Gautam0,1.25"];
// console.log(a);
// 2nd` way to create array
// let b = new Array(1,2,4);
// console.log(b);
// console.log(a.length); // its gives the size of array
// console.log(a[3]); // its give element at 3 index
// console.log(a[45]); // its print undefined bcz you acces 45 element but accutually your array length is 4

// Array Method
let arr = [1,2,3,4,5,6];
arr.push(7); // aapend element in end
console.log(arr);
arr.pop(); // remove last element
console.log(arr);
arr.shift(); // remove frist element
console.log(arr);
arr.unshift(58) // add element in beggining
console.log(arr);
let arr1 = [45,89];
let arr2 = [100,1002];
console.log("This is a Merged array");
let comb = arr1.concat(arr2); // merge array 1 with array 2 in  combination array
console.log(comb);
// Join Function : this function join any symbol ,number after one element
console.log("Join Function");
let temp = [455,145,22];
temp.join('&');
console.log(temp);
// Slice Function : array[startIndex,Endindex] but its print startindex Value to EndIndex-1
console.log(arr.slice(0,4));
console.log(arr.indexOf(58)); // This give index of element
