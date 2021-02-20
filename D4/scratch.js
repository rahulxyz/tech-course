
// for(var i = 0; i<10; i++){
//     console.log(i);
// }

// let i = 10;

// while(i>0){
//     console.log(i);
//     i=i-1;
// }

// let a = [1,2,3,4,5,6];

// let len = a.length;

// for(let i = 0; i<len; i++){
//     console.log(a[i]);
// }

// a.forEach((data)=>{
//     let j = data*2;
//     console.log(j);
// })


// let obj = {
//     "name":"Alpit",
//     "age":20
// }


//for in loop

// for(let laptop in obj){
//     console.log(laptop+" "+obj[laptop])
// }

//console.log(Object.keys(obj));

// Object.keys(obj).forEach((data)=>{
//     console.log(data+" "+obj[data]);
// })


//console.log(obj.hasOwnProperty("name"));

// let test = {
//     "num1":20,
//     "num2":20
// }

// test.__proto__.num3 = 25;

// test.__proto__.sum = function(){
//     console.log(this);
//     return test.num1+test.num2;
// }

// console.log(test.sum());

// let a = [];
// for(let i= 0;i<1000;i++){
//     a.push(i);
// }
// console.log(a);

//----1st way-----//

// function test(data){
//     console.log("Yaee..!!! "+data);
//        return 10;
// }

// test(10);

//-----2nd way------//

// let test = function(){
//     //console.log("Yaeee..!!!");
//     return 10;
// }

// console.log(test);


//-----3rd way-------//
// let test = ()=>{
//     console.log("Arrrow function..!!!");
// }

// test();


// let test =  () =>{
//     return 10;
// }


// let test = data => data

// console.log( test(10))

// let test =  () =>(console.log(10), console.log(10));

// test();

// var a = 20;
// function test(){
//     var a = 10;
//     console.log(a);
// }

// test();
// console.log(a);


// var obj = {
//     "name":10,
//     "age":20
// }

// function test(name, age){
//     this.name = name;
//     this.age = age;
// }

//  let a = new test("alpit",10);
//  let b = new test("Rahul",10);
// let c = new test("alpit",10);
// let d = new test("alpit",10);

// console.log(a);
// console.log(a.age);

// test.prototype.info = function(){
//     return this.name+" "+this.age;
// }

// console.log(a.info())
// console.log(b.info())