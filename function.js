function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function')
doubleIt(15);
console.log('------------------');
doubleIt(88);
console.log('-----------------');
doubleIt(873);
const number = 55;
doubleIt(number);
const money = 112;
doubleIt(money);



// 
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);
console.log('-----------------');




function tenTimes(number) {
    const result = number * 10;
    return result;
}

function cutHalf(number) {
    const half = number / 2;
    return half;
}

tenTimes(5);

const output = tenTimes(5);
console.log('output', output);

const cut=cutHalf(99);
console.log('cutHalf',cut );

console.log('-----------------');



function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add(5, 80);

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(5, 80);

console.log(bill, bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);

