//array to string to array conversion
const fruits=['amm','jamm','lichu','dragon','bedena']
console.log('fruits array:',fruits);
const str=fruits.join(' ')
// const str=fruits.join('')

console.log("fruits string:",str);
const str2=str.split(' ')
console.log("fruits again array:",str2);


// more explore with array

const arr=[2,3,7,9,0,8,3,5,2,1]
const arr2=[2,3,7,9,0,8,3,5,2,1]
const arr3=[2,3,7,9,0,8,3,5,2,1]
const arr4=['c','c++','java','php','c#']

console.log(arr.slice(-1));//last index value return

console.log(arr.slice(2,6));//index take 2,3,4,5

console.log(arr.lastIndexOf(3));//last position of a value in an index

console.log(arr.indexOf(99));//not found so -1

console.log(arr.includes(99));// false
//console.log(arr2.fill(0));//fill all index with zero

console.log(arr2.fill(0,2,6));//fill index 2 to 5 with zero

console.log(arr3.splice(1,7));// (x,y)it cut the array from the x index to next y number of items.y indicates the number of items cut and x indicates where to start this cutting and finally return the cut array

console.log(arr4.splice(1,1,'Python'));








