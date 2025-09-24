const numbers = [1,2,3,4,5,6];

// let temp = [];
// for(let index = 0; index<numbers.length; index++){
//     const element = numbers[index];
//     const sum = element + 1;
//     temp.push(sum)
// }

// console.log(temp);

// const newArray = numbers.map(value => value + 1);
// const newArray = numbers.map(number => console.log(number)
// );
// const newArray = numbers.map(number => {
//     return number + 1
// })
// console.log(newArray);

// const squareArray = numbers.map(element=> {
//    return element*element
// }
// );

// console.log(squareArray);

const friends = ['raihan','sam','karim'];

// const newFriends = friends.map(friend => friend)
// console.log(newFriends);

const newFriends = friends.map((friend, index) => {
    // console.log(friend); shows single element
    console.log(index);
    
    return friend

})
// console.log(newFriends);




// for (let index = 0; index < friends.length; index++) {
//     const element = friends[index];
//     console.log(element);
    
    
// }







