// const arr = [2,4,5,6.8,1,0]
// // Push 
// arr.push(10)

// //unshift()
// arr.unshift(0)

// //pop()
// arr.pop()

// //shift()
// arr.shift()
// console.log(arr)

// arr[0] = {name:"kshitij"}
// console.log(arr)

// const names = ["yash","sahil","rohan","Karan","shub"]

// console.log(names.indexOf("sahil"))
// console.log(names.lastIndexOf("sahil"))

// console.log(names.includes("Karan"))
// console.log(names.includes("Karan",4))

// //find 
// let Channels = [{
//     name:"Apna College",
//     subs : 10000
// },{
//     name:"Apni kaksha",
//     subs : 20000
// },{
//     name:"Aman",
//     subs : 40000
// }];
// console.log(Channels.find(function(element){
//     return element.name  === "Aman"
// }))

// console.log(Channels.find(element=> element.name  === "Aman"
// ))

// //
// let names1 = ["yash","sahil","rohan"]
// let name2 = ["Karan","shub"]
// let names3 = names1.concat(name2)
// // spreed opertor
// let names4 = [...names1,...name2]

// console.log(names4)
// console.log(names3.slice(0,3))

// //Loops in Array

// for(let i = 0; i<names4.length;i++){
//     console.log(names4[i])
// }

// for(let n of names4){
//     console.log(n)
// }


// names4.forEach((name,index)=>{
//     console.log(name,index)
// })
// // join

// let stud = ['s','h','i','v','m']
// let students  = stud.join('')

// console.log(students.split())
 
// //split

// console.log(students.split())
 
// //filter

// let citys = [{
//     name : "Delhi", 
//     population : 300000
// },{
//     name : "Mumbai",
//     population : 2500000
// },{
//     name : "Bangalore",
//     population: 750000
// },{
//     name :"Hyderabad",
//     population :1000000
// }];

// console.log(citys.filter((city,index)=> 
//     city.population > 2000000
// ))

// //map

// console.log(citys.map(city => city.population *2))


const Characeter = [{
    name : "Tarak Mehta",
    height : 172,
    mass : 77,
    eye_color : "brown",
    gender : "Male"
},{
    name : "Jethalala",
    height : 145,
    mass : 130,
    eye_color : "black",
    gender : "Male"
},{
    name : "Babita ji",
    height : 150,
    mass : 50,
    eye_color : "grey",
    gender : "feMale"
},{
    name : "Krishnan iyer",
    height : 168,
    mass : 80,
    eye_color : "black",
    gender : "Male"
    
}]

// for( n of Characeter){

//     console.log(n.name)
// }

// console.log(Characeter.map(C => C.name))

// console.log(Characeter.map(C =>{
//     return {name : C.name,
//            height: C.height}
// }))

// const totalheight = Characeter.reduce((sum,curr) =>{
//     return sum  = sum + curr.height;
// },0)
// console.log(totalheight)

// var totalmass = Characeter.filter((Characeter) => Characeter.mass > 100)
// console.log(totalmass)

// var Male  = Characeter.filter((Characeter)=> Characeter.gender=="Male")
// console.log(Male)

// var s = Characeter.sort((Characeter1,Characeter2)=>{
//    if(Characeter1.name < Characeter2.name){
//     return -1
//    }
//    if(Characeter1.name > Characeter2.name){
//     return 1
//    }
//    return 0
// })
// console.log(s)

// console.log(Characeter.sort());

