function sum() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
        
    }
}


const result = sum()
result()
result()

const result2 = sum()
// console.log(result2);
result2()
result2()

result()
