class Car{
    numberOfWheels:number;
    constructor(){
        this.numberOfWheels = 4;
    }
}

class Ferrari extends Car{
make:string;
model:string;
year:number;
constructor(make:string , model:string , year:number){
    super();
    this.make = make;
    this.model = model;
    this.year = year;
}
}

let ferrariObject = new Ferrari("Ferrai","Italia",2012);

console.log("Ferrari car has : " + ferrariObject.numberOfWheels);
console.log("Make : " + ferrariObject.make + " , Model : " + ferrariObject.model + " , Year : " + ferrariObject.year);