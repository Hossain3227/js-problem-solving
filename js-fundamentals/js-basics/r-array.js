// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotate_elements_left(array){

    return [array[1],array[2],array[0]];
}

console.log(rotate_elements_left([3,4,5]));
