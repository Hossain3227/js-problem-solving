class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('i can move');
        
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat){
        super(name,price)
        this.seat = seat
    }
    route() {
        console.log('dhaka to ctg');
        
    }
}

class truck extends Vehicle{
    constructor(name,price,load){
        super(name, price);
        this.load= load
    }
}

const greenLine = new Bus('greenLine','12',50);
// console.log(greenLine);
greenLine.move()






