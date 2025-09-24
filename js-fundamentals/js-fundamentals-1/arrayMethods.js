const products = [
  { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
  { id: 2, name: "Xiaomi", color: "gold", price: 1000, brand: "xiaomi" },
  { id: 3, name: "samsung", color: "gold", price: 1500, brand: "samsung" },
  { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
  { id: 5, name: "Xiaomi", color: "black", price: 1100, brand: "xiaomi" },
];


const newProduct2 = products.filter(p=>p.name==='iphone')
console.log(newProduct2);



// const singleProduct = products.find(p=> p.id === 3)
// console.log(singleProduct);





// products.forEach(product=> console.log(product))

// products.forEach(product=> {
//     if(product.brand =='apple'){
//         console.log(product);
        
//     }
// })



// const newProducts = products.map(p=> {
//     if(p.brand==='apple'){
//         p.price = p.price +100;

//     }
//     return p;
    
// })

// console.log(newProducts);





// products.forEach(product => {
//     if(product.color === 'gold'){
//         console.log(product);
        
//     }
    
// })


// const newProducts = products.filter(p=>p.id != 3);
// console.log(newProducts);


// const product = products.find(p => p.color === 'gold');
// console.log(product);

// const newProducts = products.filter(product=> product.price>2000);

// console.log(newProducts);







