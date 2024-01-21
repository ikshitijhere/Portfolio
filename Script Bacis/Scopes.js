//Scopes
var name = "kshitij";

function sayname(){
    var Marks= 200
console.log(name);
}

sayname()

//Loacl Scope

function first(){
    var x = 1
    console.log(x)
    function child(){
        var x = 2
        console.log(x)
    }
    child()
}
first()

