//object declare
//object is a non-primitive data type as it can hold diff type of data
const bottle={
    brand: "apple",
    price: 45,
    color: 'white',
    isClean:true,
    'bt factories':['dhaka','cumilla','shylet'],
}
const subject={
    name: 'physics',
    teacher: 'Sumon Sir',
    examDate: '30feb',
    chapters: ['first','third','sixth','seventh'],
    exams:{
        name:'final',
        marks:{
            written:70,
            mcq:30,
        }
    }
}
console.log(bottle);

//
console.log("......dot notation access......");
console.log(bottle.brand);
const price=bottle.price
console.log(price);
//console.log(bottle.bt factories); error occurs

//bracket notation
console.log(".......bracket notation.........");
console.log(bottle['color']);
const year=bottle['isClean']
console.log(year);//value k rakha then print kora
const kikos='brand'
console.log(bottle[kikos]);// key k onno variable e rakha then oi variable ta k print korle value chole ahbe
console.log(bottle['bt factories']);

//update
console.log(".............Update...............");
bottle.brand='One life'
bottle['price']=40
bottle['bt factories']=['am','ban','can']
const wrong='color'
bottle[wrong]='blue'//direct access r update na kore key k variable  e rekhe tar maddhome kora
console.log(bottle);
console.log('-------------------');

//keys
const kes=Object.keys(bottle)
console.log(kes);
//values
const val=Object.values(bottle)
console.log(val);
console.log('-------------------');

console.log("...........nested Object...............");
console.log(subject.exams.name);
console.log(subject.exams.marks.mcq);
subject.chapters[0]='second'
console.log(subject.chapters);
delete subject.examDate
console.log(subject);




