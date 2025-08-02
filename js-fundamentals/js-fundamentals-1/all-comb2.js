// JavaScript program to combine the numbers of a given array into an array containing all combinations.

function pset(arr){
    let result =[[]];

    for(let item of arr){
        let newSub = result.map(subset => [...subset,item]);
        result = result.concat(newSub);
    }
    return result
}

// Test cases
console.log(pset([1, 2]));
console.log(pset([1, 2, 3]));
console.log(pset([1, 2, 3, 4]));