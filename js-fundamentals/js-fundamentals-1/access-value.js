const person = {
    name:'sam',
    1:'100',
    true: 'sds',
    age: 40,
    friends:['karim','hero'],
    details:{
        job: 'yes',
        isMarried: true,
        status: "not found",
        father: {
            name:'jack'
        }
    }
}

// console.log(person.1); this shows error
console.log(person[1]);
console.log(person[true]);


// console.log(person['details']['job']);



// console.log(person.details.father.name)
// console.log(person.details.mother?.name)