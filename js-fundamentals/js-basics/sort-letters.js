// Write a JavaScript program to convert letters of a given string alphabetically.
function alphabet_Soup(str){
    return str.split("").sort().join("");
}

console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("Exercises"));
