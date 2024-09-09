let numbers=[3,4,1,2,8,9];
console.log(numbers);
// for of loop
for(const num of numbers){
    console.log(num);
}

//while loop
let a=1;
let sum=0;
while(a<=10){
    console.log(a);
    sum=sum+a;
    a++;
}
console.log("total sum while loop", sum);

//for loop 
let b;
let s=0;
for(b=1; b<=10; b++){
    console.log(b);
    s=s+b;
}
console.log("total sum for loop", s);

//do while loop
let d=99;
do{
    d++;
    console.log("Do while loop", d);
}
while(d<50)


// break: i am done with this loop.Loop ends
// continue: skip this iteration
let c=0;
let t=0;
while(c<=100){
    t=t+c;
    if(c>9){
        break;
    }
    c++;
}
console.log("total sum using break", t);

let n=0;
while(n < 30){
    n++;
    if(n%5 !== 0){
        continue; //5 dara bivajjo na oiguli skip
    }
    console.log(n);
}