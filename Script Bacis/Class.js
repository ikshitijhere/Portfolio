//declaring class
class Product {

    
    // constructor(itemname,price,discount,productcode){
    //     this.itemname = itemname;
    //     this.price = price;
    //     this.discount = discount;
    //     this.productcode = productcode;

    // }
    constructor(itemname){
        console.log("Passed By furniture");
        this.itemname = itemname;
    }

    getitemname(){
        return this.itemname + " is a Class Product";
    }
}

class Furniture extends Product{
    constructor(itemname){
        super(itemname);
    }
    getitemname(){
        return this.itemname+" is a furniture Class";
    }
}

// // let pensil = new Product('pencil',20,2,'P20');
// // let pencil  = new Product('Pencil');
// let chair = new Furniture('Chair');
// // console.log(pencil.getitemname());
// console.log(chair.getitemname());

// // const Product1 = class Product {

    
// //     constructor(itemname,price,discount,productcode){
// //         this.itemname = itemname;
// //         this.price = price;
// //         this.discount = discount;
// //         this.productcode = productcode;

// //     }
// //     get getDiscountVal(){
// //         return this.discount;
// //     }
// //     set setDiscountVal(value){
// //         this.discount = value;
// //     }
// //     //Method Defination
// //     discountval(){
// //         return this.discount/100*this.price;
// //     }
// }
// let chair = new Product1('chair',499,15,'C10');
// console.log(chair.setDiscountVal=30);
// console.log(chair.getDiscountVal);
// console.log(chair.discountval())


// Extending Class








//getter and setter method

