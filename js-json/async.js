// const handleUser = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=> res.jon())
//     .then(data=> console.log(data)
//     )
//     .catch(error=>console.log("caught error",error))
// }

// handleUser()

// const num1= 10;
// const num2 = 20;
// const result = num1 + num2;

// const response = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=> res.json())
// .then(data=>console.log(data)
// )

// console.log(result);
// console.log("hello");

const handleUser2 = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // console.log(response);
  // const data = await response.json();
  // console.log(data);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("error found");
  }
};
handleUser2();
