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
const arr4=['c','c++','java']

//slice method

console.log(arr.slice(-1));//last index value return

console.log(arr.slice(2,6));//index take 2,3,4,5

console.log(arr.lastIndexOf(3));//last position of a value in an index

console.log(arr.indexOf(99));//not found so -1

console.log(arr.includes(99));// false
//console.log(arr2.fill(0));//fill all index with zero

//fill method
console.log(arr2.fill(0,2,6));//fill index 2 to 5 with zero

//splice method

console.log(arr3.splice(1,7));// (x,y)it cut the array from the x index to next y number of items.y indicates the number of items cut and x indicates where to start this cutting and finally return the cut array

//const p=arr4.splice(1,1,'python') //c++ removed and python added replace
const p=arr4.splice(2,0,'python','javascript','c#')// after 2 no index nothing removed and 3 more added 

console.log(arr4);


//find index method 

const numbers = [1, 3, 5, 7, 10, 15,20];
console.log(numbers.findIndex(num => num % 2 === 0));
//The findIndex() method checks each element. The first even number in the array is 10, which is at index 4, so it returns 4.
const numberss=[1,3,5,7,9]
console.log(numberss.findIndex(num => num % 2 === 0));
//In this case, there is no even number in the array, so findIndex() returns -1.






