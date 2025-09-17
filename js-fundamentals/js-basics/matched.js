const numbers = [45, 65, 23, 98, 19];

// for (let i=0; i<numbers.length;i++){
//     const number = numbers[i];
//     console.log(number);
    
// }

for(const number of numbers){

    // console.log(number);
    
}

const products= [
    {id:1, name:'xiami phone', price: 19000},
    {id:2, name:'mac book air', price: 19000},
    {id:3, name:'lenovo laptop 2025', price: 19000},
    {id:4, name:'Dell inspiron laptop', price: 19000},
    {id:5, name:'Samsung phone note 7', price: 19000},
    {id:6, name:'nokia old', price: 19000},
    {id:7, name:'phone one', price: 19000},
    {id:8, name:'Phone one', price: 19000},
    {id:9, name:'M1 chip LapTop', price: 29000},
];

// for (const product of products){
//     console.log(product);
    
// }

function matchedProducts (products, search){
    
    const matched = [];
    for(const product of products){
        

        // console.log(product.name.includes(search));

        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        
    }

    return matched;
} 

// const result = matchedProducts(products, 'phone');
// console.log(result);

// const result = matchedProducts(products, 'Phone');
// console.log(result);

const result = matchedProducts(products, 'laptop');
console.log(result);















