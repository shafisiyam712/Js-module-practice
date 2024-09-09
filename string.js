// string declaration

const country="ban"
const district='narayanganj'
const thana=new String('fatullah') //special purpose
console.log(typeof district);
console.log(district.length);
console.log(typeof thana);
console.log(thana);

//string is immutable(we cant change its index value)

country[0]='p'
console.log(country);

//upper & lower case

const a='SIYAM'
const b='mbstu'
console.log(a.toLowerCase());
console.log(b.toUpperCase());

// trim->> remove space in the first and end both

const c='  hello';
console.log(c);
console.log(c.trim());

// slice ->> Returns a section of a string.(start index,end before index)

console.log(a.slice(2,4));
console.log(a.slice(2,5));

// split->> converting a string part by part into a single array
//Split a string into substrings using the specified separator and return them as an array.

const d="I am a student of ict";
console.log(d);
console.log(d.split(''));// divide by empty string
console.log(d.split(' '));// divide by white space
console.log(d.split('a'));// divide by letter
console.log(d.split('a'));// divide by letter

//join-->> Adds all the elements of an array into a string, separated by the specified separator string.

const friends=['siyam','yeamin','moallim','ismail','tuhin']
console.log(friends.join());//by default comma join
console.log(friends.join('|'));
console.log(friends.join(' <@> '));

//concat->> add one or more strings

const e='shafi'
const f='siyam'
const name=e.concat(' ').concat(f);
console.log(name);

// includes-->>Returns true if searchString appears as a substring of the result 

console.log(f.includes('a'));
console.log(f.includes('b'));










