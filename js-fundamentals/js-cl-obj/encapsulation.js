class Person{
    #status
    constructor(name,age,status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    sleep() {
        console.log(`${this.name} sleep at 10`);

        
    }
    action(){
        console.log(this.#status);
        
    }
}

const Harry = new Person('harry',12,'single');
Harry.action()
