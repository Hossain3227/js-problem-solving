// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// function remove_character(str, char_pos){

// part1 = str.substring(0, char_pos);

// part2 = str.substring(char_pos + 1,str.length);

// return (part1 + part2);
// }

// console.log(remove_character("python",0));
// console.log(remove_character("python",3));
// console.log(remove_character("python",5));


// remove string then add it at the end of the string

function move_character_to_end(str, char_pos) {
    // Extract the character
    let char = str.charAt(char_pos);
    
    // Get parts before and after
    let part1 = str.substring(0, char_pos);
    let part2 = str.substring(char_pos + 1);

    // Put the removed char at the end
    return part1 + part2 + char;
}

console.log(move_character_to_end("python", 0)); // ythonp
console.log(move_character_to_end("python", 3)); // pytonh
console.log(move_character_to_end("python", 5)); // pythno
