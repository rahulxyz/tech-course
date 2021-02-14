/*
There are total 9 data types

    Primitive data type->

    ->Number
    ->String
    ->Null
    ->Undefined
    ->Symbol
    ->Boolean
    ->BigInt


    Non primitive data type->

    ->Function
    ->Object

*/

// To check the type of variable

var a = 10;
typeof a;

//Output-> Number

console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"

typeof typeof a;
//OP-> Number

//Var is fuction scoped
//Let and const are block scoped

var t = 10;
function test(){
    var z = 10;
}
console.log(z); //will throw error
console.log(t); //op->10

let o = 5;
{
    let i = 10;
}
console.log(i); //i is not defined, as its let is block scope;
console.log(o); //op-> 5

//What is variable hoisting

//At the time of compiling, the js engine, moves all the varibles on top of the file
//Example

console.log(z) //op-> undefined
var z = 10
console.log(z);

//Will be intepreted as

//var z; 
console.log(z) //op-> undefined
z = 10;
console.log(z);  // op->10;



//In the case of let 

console.log(z) //op-> undefined
let z = 10
console.log(z);

//Will be intepreted as

//let z;
console.log(z) //op-> throws error
z = 10;
console.log(z);  // op->10;

//But if we manually add

let z;
console.log(z) //op-> undefined