let fruits:string[];

fruits = ['mango','apple','banana'];
console.log(fruits);

let animals:Array<String>;

animals = ['dog','cat','Tiger'];
console.log(animals);

let persons : Array<String | number>;
persons = ['Ram',20,'John',44,56.6];
console.log(persons);

let demo : Array<any>;
demo = ['Ram',20,'John',44,56.6,true];
console.log(demo);
console.log(demo[1]);