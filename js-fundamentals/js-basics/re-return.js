// Sum Two Integers and Return Based on Range

function sortaSum(x,y){
    const sum_nums = x+y;
    if(sum_nums >= 50 && sum_nums<=80){
        return 65;
    }
    else{
        return 80;
    }
}


console.log(sortaSum(30,20));
console.log(sortaSum(90,80));
