class Product{
    // owner = "zidan";

    constructor(name,prize,brand,owner){
        // console.log(name,prize,brand);
        this.name = name;
        this.prize = prize;
        this.brand = brand;
        this.owner = owner
        
    }

    details(){
        // console.log('this is details of product', this)
        // console.log('this is details of product', this.name)
        console.log(`this ${this.name} product`);
        
    }
}


const iphone = new Product('iphone','1234','apple','zidann');
// console.log(iphone);

// console.log(iphone.details());
iphone.details()


const xiaomi = new Product('redmi','1234','xiaomi','zidannn');
console.log(xiaomi);
xiaomi.details()









