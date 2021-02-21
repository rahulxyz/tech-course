// console.log("A");
// setTimeout(function(){
//     console.log("Settimeout");
// },2000);
// console.log("B");

//Call back function:-

// var a = function(callback){
//     console.log(callback(5,6));
// }

// let sum = function(a,b){
//     return a+b;
// }

// a(sum);

// setTimeout(function(){
//     console.log("Its a callback..");
// }, 2000);


// let x = function(time, callback){
//     callback(time);
// }

// let wait =  function(time){
//     setTimeout(()=>{
//         console.log("Done..!!!");
//     }, time)
// }

// console.log("Above X");
// x(0, wait);
// console.log("Below x");


// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");

//Callback hell --> Google

// function(callback){
//     function(callback1){
//         function(callback2){

//         }
//     }
// }


// var testP = function(data){
//     return new Promise((resolve, reject)=>{
//         if(data<10){
//             setTimeout(function(){
//                 resolve("This is resolved...!!!")
//             },2000)
//         }else{
//             reject("Less then 10 required");
//         }
//     })
// }

// console.log("Above X");

// testP(8).then((info)=>{
//     console.log("Resolved "+info);
// }).catch((error)=>{
//     console.log("Rejected "+error);
// })

// console.log("Below X")


// var testP = function(data){
//     return new Promise((resolve, reject)=>{
//         if(data<10){
//             setTimeout(function(){
//                 resolve("This is resolved...!!!")
//             },2000)
//         }else{
//             reject("Less then 10 required");
//         }
//     })
// }


// console.log("Above X");
// let check =  async function(){
//     let x = await testP(8);
//     console.log(x);
//     }
// check();
// console.log("Below X");