// check a pair of numbers and return true if one of the numbers is 50
function testFifty(x,y){
    return((x==50||y==50)||(x+y==50));
}

console.log(testFifty(50,50));
console.log(testFifty(20,50));
console.log(testFifty(20,20));
console.log(testFifty(20,30));
