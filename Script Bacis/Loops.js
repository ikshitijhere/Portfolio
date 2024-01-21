// for (let i = 10; i >=1; i--){
//     console.log(5*i);
//    //console.log("Nameste World");
// }
// for(let i = 5; i <51;i = i+5){
//     console.log(i);
// }

// for(let i = 1;i<=10;i++){
//     if (i%2!=0) {
//         console.log(i)
        
//     }
// }
// let i =0;
// while (i<10) {
//     console.log("Nameste world")
//     i++;
// }
// let i = 10;
// do {
//     console.log("Nameste world")
//     i++;
// } while (i<10);

//for In
// //object
// let animal = {
// name: "Zebra",
// leg: 4
// };

// for (const key in animal) {
//    console.log(key,animal[key]);
// }

let names = ["Rahul","Neha","Aman"];
for(let index in names){
    console.log(index,names[index]);
}

// for....Of
for (let name of names) {
    console.log(name);
}