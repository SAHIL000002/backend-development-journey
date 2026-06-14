// FUNCTION DECLARATION OR FUNCTION STATMENTS 

// syntax

/* function functionName(parameters) {
        code to be executed
        return value;
}*/

function add(a, b) {
    let c = a + b;
    return c;
}

let result = add(13, 86);
console.log(result); // 99

// FUNCTION EXPRESSIONS

// syntax

/* let functionName = function(parameters) {
        code to be executed
        return value;
} */

let fnc = function (x, y) {
    let z = x * y;
    return z;
}

console.log(fnc(5, 9)); // 45

// FAT ARROW FUNCTIONS

// syntax   

/* let functionName = (parameters) => {
        code to be executed     
    return value;
} */

let fnc1 = (x, y) => {
    let z = x / y;
    return z;
}
console.log(fnc1(10, 2)); // 5  

//  practice some questions

function dance(x) {
    console.log(`${x} nach raaha h`);
}

dance("ghoda");
dance("hiran");
dance("sher");
dance("bhaloo");
dance("panda");

function add(v1, v2) {
    console.log(v1 + v2);
}

add(10, 20); // output : 30
add(30, 40); // output : 70
add(50, 60); // output : 110


function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 5));
console.log(multiply(10, 10));
console.log(multiply(15, 15));

// PARAMETER VS ARGUMENT

// parameters mtlb function ke andar jo variable define kiya jata h, aur argument mtlb function call karte waqt jo value pass ki jati h.

// means jb hmm function define karte h to uske andar jo variable define kiya jata h use parameter bolte h, aur jb function call karte h to uske andar jo value pass ki jati h use argument bolte h.

function greet(name) { //name is parameter
    console.log(`hello ${name}`);
}

greet("sahil"); //sahil is argument


// DEFAULT PARAMETERS

//  type 1

function add(v1, v2) {
    console.log(v1, v2); // v1 and v2 do variables h aur esme koi value nhi it means undefined h esliye ye output me undefined undefined show krega.
}
add(); // output : undefined undefined

// type 2

function add(v1, v2) {
    console.log(v1 + v2); // v1 and v2 do variables h aur esme koi value nhi it means undefined h esliye ye output me NaN show krega.
}
add(); // output : NaN

// type 3

function add(v1 = 0, v2 = 0) { // it is also allowed
    console.log(v1 + v2);
}

add(); // output : 0

function add(v1 = 1, v2 = 5) {
    console.log(v1 + v2);
}
add(); // output : 6

// type 4

function add(v1 = 0, v2 = 0){
    console.log(v1 + v2);
}  
add(10,2); // output : 12 
// ye parameter ke values (v1 = 0, v2 = 0) ko update karke jo argument diye h (10 ,2 ) wo parameter ko assign kr dega aur operations uske basis per hoga

// REST OPERATOR

// store multiple values in an single  array

function abcd(...val){
    console.log(val); 
}
abcd(1,2,3,4,5,6); // output : [1, 2, 3, 4, 5,6]

function absd(a,b,c,...val){
    console.log(a,b,c,val);
}
absd(1,2,3,4,5,6); // output : 1 2 3 [4, 5, 6]

// RETURN

function add(V) {
    return 12+V; // return value is 12+10
}
let result = add(10); // result is a variable which will store the return value of add function
console.log(result); // output : 22

// PURE AND IMPURE FUNCTIONS

// pure function means jo bahar ki value ko change nhi karta.

// impure function means jo bahar ki value ko change karta h.

let a = 12;
function abcd(){
    console.log(a); // pure function kyuki ye bahr ki value ko change nhi kr rahi h.
}

function hui(){
    a++; // impure function because it is changing the value of a mtlb ye bahar ki value ko change kr rahi h.
}

// FIRST CLASS FUNCTIONS

// first class functions mtlb functions ko treat kiya jata h as a value.

// 1. A function can be stored in a variable    

let fnc = function () {
    console.log("hello world");
}
fnc(); // output : hello world

// 2. A function can be stored in an array

let arr = function () { 
    console.log("hello world");
}
let arr1 = [arr];
arr1[0](); // output : hello world

// 3. A function can be stored in an object

let obj = {
    fnc : function () { 
        console.log("hello world");
    }
}
obj.fnc(); // output : hello world

// CLOSURES AND LEXICAL SCOPING

// #CLOSURE

// closure means ek function jo return kare ek aur function and return hone wala function hamesha use karega parent function ka koi variable.

function abcd(){
    let a= 12;
    return function(){
        console.log(a); // output : 12
    }
}

// #LEXICAL SCOPING

// lexical scoping means ek function ke andar jo variable define kiya jata h wo function ke andar hi accessible hoga aur bahar se access nhi kiya ja sakta. 

// and inner functionapne parent function ke variable ko access kar sakta h but parent function apne child function ke variable ko access nhi kar sakta h.

function abcd(){
    let a = 12;
    console.log(a); // output : 12
    function defg(){
        let b= 4;    
        console.log(a,b); // output : 12 4  this also possible because of the lexical scoping
        function ghij(){
            let c= 2;
            console.log(a,b,c); // output : 12 4 2   this is possible because there exist lexical scoping
        }
    }
}

// IIFE (IMMEDIATLY INVOKE FUNCTION EXPRESSION )

(function(){    
    console.log("hello world"); // output : hello world
})();                  

