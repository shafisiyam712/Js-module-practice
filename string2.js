// reversing a string

const a='I am a web dev.'
let reverse=''
for(const letter of a){
    // console.log(letter);
    reverse=letter+reverse;//0--w--ew--bew
}
console.log(reverse);

//using for loop

let rev=''
for(let i=0; i<a.length; i++){
    const lett= a[i];
    rev=lett+rev;
}
console.log(rev);

// short cut
const revs=a.split('').reverse().join('');
console.log(revs);

//replace-->>
const st='XXjhkjghxxjkhkXX'
const bp=st.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(bp);

//indexof
let str='MissisAsippi'
console.log(str.indexOf('A'));
console.log(str.indexOf('i',4));//it start searching the index of i after 5 index start from 5 to last and get the immediate index

