//objects
let animal = {

   name: "Tiger",
   legs: 4

}
console.log(animal);
//Dot notation
console.log(animal.name);
//bracket notation
console.log(animal["name"]);

let legsproperty = "legs";
console.log(animal[legsproperty]);

//Array

let a = [0,10,20,30];
a.push(50);
let x = a.length;
console.log(x);
console.log(a);

//Functions

function Nameste(name){
    console.log("Nameste JavaScripts "+ name);

}
let name1  = "Kshitij"
Nameste(name1);

function Addition(a,b){

    return a +b;

}
console.log(Addition(5,5));