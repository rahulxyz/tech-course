//1. SCOPE

const { global } = require("yargs");

function test1(){

    for(var i= 0;i<=5; i++){
        console.log(i);
    }

    console.log(">>>> ", i);
}

function test2(){

    for(let i= 0;i<=5; i++){
        console.log(i);
    }

    console.log(">>>> ", i);
}

function test3(){

    for(const i= 0;i<=5; i++){
        console.log(i);
    }

    console.log(">>>> ", i);
}

//test3();


//2. Hoisting
// var let const is hoisted
function test4(){
    console.log(a);
    var a = 5;//default initial value undefined
}

function test5(){
    console.log(a);
    let a = 5; //remains uninitialised by default
}

function test6(){

    function test(){
        return 3;
    }

    return test;

    function test(){
        return 8;
    }

}

let test7 = test6();
//console.log(test7());


// 3. CLOSURE : 2 nested function
// restrict access to variable
// provides access to 3 diff scopes ie inner scope , outer scope, global scope



function outer(){
    var username = "rahul"

    function inner(){
        console.log(username, window);
    }

    return inner;
}

let test8 = outer();
//console.log(test8());


//4. this
let user = {
    name: "rahul",

    getName1: function(){
        console.log(this);
        return "Mr. "+ this.name;
    },

    getName2: ()=>{
        console.log(this);
        return "Mr. "+ this.name;
    }
}

let out =  user.getName2();
console.log( out ) ;


//IIFE
/* (function(){
    console.log(this.name)
})() */


//5. call apply bind
// change context of function when it is called
// fn.method( new object )

let user2 ={
    name: "alpit"
}

//function immediately invoked
user.getName1.call(user2);

//returns reference to the newly binded function that can be invoked later
let a =  user.getName1.bind(user2);

// apply
 //call(obj , arg1, arg2)
 user.getName1.call(user2, arg1, arg2);
 //apply(obj, [arg1, arg2]) /// signature of function does not change
 let arr = [arg1, arg2];
 user.getName1.apply(user2, arr);