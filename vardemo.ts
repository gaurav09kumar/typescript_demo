var petName:string = "dog";

function setPetName(){
    var petName:string = "cat";
    console.log("Inside function : " + petName);
}

setPetName();

console.log("Outside function : " + petName);

var index=0;
for(var index=0; index<=5; index++){
    console.log("Index value inside for Loop" + index);
}
console.log("Index value outside for loop" + index);
