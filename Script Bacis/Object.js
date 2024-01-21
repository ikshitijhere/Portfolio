// var Obj = {
//   product : "Apple",
//   Item : "Iphone",
//   Price : "$12,000"
// }
// let obj1 = ["Apple","Iphone","$12,000"];
// for (let Id in  obj1){
//     console.log(Id,obj1[Id]);

// }
// console.log(Obj);

// function greet(user){
//    console.log("happy to see You " +user);
// }
// greet("Kshitij");

// function Serve(item){
//   this.item = item;
//   this.Serveing;
//     console.log("Here is your Order sir " +this.item);
  
// }
// const S = new Serve('ButterPanner');

let product = {
  itemname: "Whey",
  Price : 1300,
  discount : 130,
  ItemCode : "F1211"
}

function CreateProduct(name,price,discount,ItemCode){
  return{
  itemname : name,
  Price : price,
  Discount : discount,
  ItemCode : ItemCode
}
}
const football = CreateProduct("Football",1000,100,"F2111");
console.log(football);

function Product(name,price,discount,ItemCode){
  this.itemname = name;
  this.Price = price;
  this.Discount = discount;
  this.ItemCode = ItemCode;

  this.func = function(){
    return this.Price/100*this.Discount;
  }
}

const Whey = new Product("MuscleBlaze",1500,10,"R2211");
console.log(Whey);
console.log("Discount over "+Whey.itemname+" is "+Whey.func());
