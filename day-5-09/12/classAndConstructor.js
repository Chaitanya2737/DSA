class constructor {
    constructor(name , age) {
        this.name =  name
        this.age = age
    }
    run(){
        console.log(this.age , this.name)
    }
}

let cons =  new constructor("Chaitanya" , 21);

cons.run()