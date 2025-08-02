// JavaScript program to combine the numbers of a given array into an array containing all combinations.

const pset = arr => 
    arr.reduce(
        (a,v) => a.concat(a.map(r => [v].concat(r))),[[]]
    );


    console.log(pset([1,2]));
    console.log(pset([1,2,3]));
    console.log(pset([1,2,3,4]));
    


// initial value: a = [[]] (an array with one empty set)

// a = all the subsets collected so far (the "accumulator").

// v = the current item from the array.



// output
// [[],[1],[2],[2,1]]
// [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]
// [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1],[4],[4,1],[4,2],[4,2,1],[4,3],[4,3,1],[4,3,2],[4,3,2,1]]
