let str = "This is a String";
console.log(typeof(str));
// Escape literal

let str1 = ' you\'ve no right to do so !';
console.log(str1);

//concatination

 let str3 = str + str1;
console.log(str3);

let str4 = str + 100;
console.log(str4);

let num1 ="123";
console.log(typeof(Number(num1)));
console.log(typeof(num1));

let num =123;
console.log(typeof(num.toString()));

//letrals (Backticks)

let a = `Hello javaScript ${str} `;
console.log(a);

//methods of String

//Length 
var Str = "Apna College";
let A = Str.length;
console.log(A);

// CharAt
let ch = Str.charAt(0);
console.log(ch);

//split
var Strnew = Str.split('');
console.log(Strnew);

//Index of
console.log(Str.indexOf("C"));

//slice
console.log(Str.slice(0,5));

//Lower and Upper
var srk = "I'm Sharukh Khan";

console.log(srk.toUpperCase());
console.log(srk.toLowerCase());