//loop in object
const mobile={
    brand:'samsung',
    price:30000,
    color:'black',
    camera:'18mx'
}
//for of --> array
//for in--> object
for(const prop in mobile){ //directly key gulor akta array baniye access korte pare alada kore ber korte hoi na
    console.log(prop);
    //console.log(prop,":|:",mobile[prop]);
    console.log(mobile[prop]);//cotetion bhe na
}
//another way using array
const keys=Object.keys(mobile)//sob key akhn akta array te
for(const key of keys){
    console.log(key,":|:",mobile[key]);//loop er maddhome every keyr shate tar valu jure dewa hocche
}

//some more way to declare on=bject
const pencil=new Object(6)
console.log(pencil);
const rubber=Object.create({})
console.log(rubber);

//add a property
console.log('added a new property');
mobile.screan='40px'
console.log(mobile);
//delete a property
console.log('deleted the added property');
delete mobile.screan
console.log(mobile);


