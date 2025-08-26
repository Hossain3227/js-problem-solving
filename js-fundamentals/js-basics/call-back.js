// function showcallfunc(fn){
//     const value = 10;
//     fn(value);
// }

// showcallfunc(function (value) {
//  console.log(value);
 
// })


function greetLater(callback) {
  console.log("Preparing greeting...");
  callback("Hossain"); // I’m telling it: “when ready, run this function”
}

greetLater(function(name) {
  console.log("Hi " + name);
});
