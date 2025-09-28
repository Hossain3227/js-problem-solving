// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// setTimeout(()=> {
//  console.log('hellow');
 
// },4000)

let count =0;
const clockId= setInterval(()=> {
    // console.log("hellow");
    count++;
    console.log(count);
    
    // clearInterval(clockId)

    if(count >= 5){
        clearInterval(clockId)
    }
    
},2000)

// console.log(clockId);



// console.log(5);
// console.log(6);

