// this is array

let num=[2,3,4,5,6,7,8,2,1,9];
console.log(num.length);
console.log(num);
const v='hehehe';

let name=["ab","bc","cd","de"];
// console.log(name.length);
// console.log(name);

// push and pop  and shift element
num.push(44);
console.log(num);
num.pop();
console.log(num);
// shift delete the 0 index 
num.shift();
console.log(num);
// unshift insert in the 0 index
num.unshift(99);
console.log(num);

// check a element is it here or not
console.log(num.includes(8));

// find index
console.log(num.indexOf(8));
// check an array
console.log(Array.isArray(num));
console.log(Array.isArray(v));
//combine 2 array
let ar=num.concat(name);
console.log(ar);

// slice
console.log(num.slice(2,7));
