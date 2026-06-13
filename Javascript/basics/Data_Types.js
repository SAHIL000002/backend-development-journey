// DATA TYPES

//  1. Primitives data types

// Primitive data types value ko directly store karte hain aur assignment ke time value ki copy create hoti hai.

// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

let a = 'sahil'; //string single quotes
let a1 = "sahil";  //string double quotes
let a2 = `sahil`;  //string backticks (template literals)
let a3 = `my name is ${a}`; //string with template literals

let b = 42;       //number
let b1 = 3.14;     //number 
let b2 = -10;      //number negative

let c = true;    //boolean
let c1 = false;  //boolean

let d;
console.log(d); //undefined -> iska mtlb variable declare toh kar diya but usko koi value assign nhi kiya es case me undefined output aayega

let e = null;     //null -> eska mtlb jaan boojh kar koi value nhi di means null dia h ki aage ese use karenge tb value denge

let f = 123n;     //bigint n shows that the datatype is bigint

let g = Symbol('sahil'); //symbol -> iska mtlb unique identifier create karna, har symbol unique hota hai chahe uska description same ho

// 2. Non-primitive data types

// Reference data types actual value ka reference (memory address) store karte hain, isliye multiple variables same data ko access kar sakte hain.

// Array []
// Object {}
// Function ()

let obj = { name: "sahil", age: 22 }; //object  
let arr = [1, 2, 3, 4, 5]; //array
function greet() { } //function

// DYNAMIC TYPING

// JavaScript me variable ki datatype change ho sakti hai, yani ek variable me pehle string store kar sakte hain aur baad me usme number store kar sakte hain.
// means js me static typing nhi hoti, dynamic typing hoti hai, yani variable ki data type runtime pe decide hoti hai, aur aap ek variable me different data types store kar sakte hain.

let x = "hello";
x = 42; // yaha pe x ki data type string se number me change ho gayi, aur ye allowed hai JavaScript me.
x = true;
x = { name: "sahil" };
x = [1, 2, 3];
// this all allowed in JavaScript because of dynamic typing.


// TYPE COERCION

// JavaScript me automatic type conversion hoti hai, yani agar aap ek string aur number ko add karte hain to JavaScript automatically number ko string me convert kar deta hai aur dono ko concatenate kar deta hai.

let y = "5" + 10; // addition + concatination both in a single line and the output is 510. type = string
console.log(y); // 510
console.log(typeof y); // string
"5" - 2; // subtraction, output is 3, type = number
"5" * 2; // multiplication, output is 10, type = number
"5" / 2; // division, output is 2.5, type = number

// TRUTHY AND FALSY VALUES

// 0 false  "" null undefined NaN document.all  -> ye sab falsy values hain, yani agar aap inhe boolean context me use karte hain to ye false ke tarah behave karte hain.

// rest of all these (0 false  "" null undefined NaN document.all) are truthy.

// SOME PRACTICE 

true + true; // 2 because true is treated as 1 and false is treated as 0 in arithmetic operations.
false + false; // 0
true + false; // 1
null + 1; // 1 because null is treated as 0 in arithmetic operations.
5+"5"; // "55" because number 5 is converted to string "5" and then concatenated. 
!!undefined; // false because undefined is a falsy value.
