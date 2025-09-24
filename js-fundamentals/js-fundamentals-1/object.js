const person = {
    name: 'hena',
    age: 10,
    country:'80'
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person))

// Object.seal(person)
// Object.freeze(person)

// person.status = 'not found';
// person.age = 20;

// console.log(person);


// for(let key of person){
//     console.log(key);   
// }

// console.log(person["name"]);




// for(let key in person){
//     console.log(key);   
// }

// for(let key in person){
//     console.log(`key: ${key} value: ${person[key]}`);   
// }

// for(let key of Object.entries(person)) {
//     console.log(key);
    
// }

for(let [key,value] of Object.entries(person)) {
    console.log(`key: ${key} value: ${value}`);
    
}
















