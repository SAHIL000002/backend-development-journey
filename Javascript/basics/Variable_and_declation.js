// VAR LET CONST 

var a;
var a = 10;  // no error because var can be redeclared
var a = 5;  // also no error it is allow with var
x = 10;  //  also a var and no error occur

let b;
let b = 10;  // error
b=20;  // no error

const c;  // error
const c = 30;  // no error


// DECLARATION AND INITIALIZATION

let a; // declaration : means declare this variable at first time
a = 5; // initialization : means assinging the first value

a = 10; // this is not inialization because the ffirst value assigning in the past and also this line updadte the value of a.

// RE-DECLARATION AND RE-ASSIGNMENT

var a = 10;  
var a = 20;  // no error because var can be redeclared
a = 30;  // no error because var can be re-assigned


let b = 10;
let b = 20;  // error because let cannot be redeclared and redeclaration is only allow with var
b=30;  // no error because let can be re-assigned

const c = 10;
const c = 20;  // error because const only declare once 

c=30;  // also an error because const cannot be re-assigned


// SCOPE (GLOBAL , FUNCTIONAL , BLOCK)

let a = 10; // Global scoped because it is outside of any body 

function demo() {
    let b = 20; // Function scpe because it is inside the function body

    if (true) {
        let c = 30; // block-scoped because it is declared with let inside a block {}.
        console.log(a, b, c);
    }

    console.log(a, b);
}

demo();


// SCOPE OF THE VARIABLES

    // 1. var 

function demo() {
    if (true) {
        var a = 10;
    }

    console.log(a); //  Works because var is functional-scoped, so it is accessible outside the block but within the function.
}

demo();

//   2. let

function demo1() {
    if (true) {
        let b = 20;
        console.log(b); // it get the output 20 because let is block scopes means it works only inside the {...} 
    }

    console.log(b); // Error because the variable b is created with let and let is block scoped and this line of code is try to get output from the outside the the block where the variable b is declared   ...it shows refrence error
}

demo1();

//  3. const

function demo2() {
    if (true) {
        const c = 30;
        console.log(c); //  it is also block scoped so this line is under the block so it shows the output 30.
    }

    console.log(c); // Error because this line is outside from the block so this line gets error
}

demo2()

// TEMPORAL DEAD ZONE

//  1. var

console.log(a); // undefined because of hoisting 


//  temporal dead zone for var a 

var a = 10; // var is hoisted and initialized with undefined, so it does not throw an error but gives undefined as output.

// 2. let

console.log(b); // it shows  ReferenceError: Cannot access 'b' before initialization because let is hoisted but not initialized, so it throws a reference error when accessed before initialization.


// temporal dead zone for let b


let b = 20;

// 3. const

console.log(c); // it shows  ReferenceError: Cannot access 'c' before initialization because const is hoisted but not initialized, so it throws a reference error when accessed before initialization.


// temporal dead zone for const c


const c = 30;


// HOISTING OF VAR, LET AND CONST 

// Hoisting means when we create a variable, JavaScript separates it into two parts: declaration and initialization. During hoisting, the declaration part is moved to the top of its scope, while the initialization part remains in its original place.

// 1. var

console.log(a); // undefined because of hoisting

var a = 10; // var is hoisted and initialized with undefined, so it does not throw an error but gives undefined as output.

// 2. let

console.log(b); // it shows  ReferenceError: Cannot access 'b' before initialization because let is hoisted but not initialized, so it throws a reference error when accessed before initialization.

let b = 20;  // let is hoisted but not initialized, so it throws a reference error when accessed before initialization.

// 3. const

console.log(c); // it also shows  ReferenceError: Cannot access 'c' before initialization 

const c = 30; // const is hoisted but not initialized, so it throws a reference error when accessed before initialization.

// var -> hoist -> undefined
// let -> hoist -> X ..got reference error
// const -> hoist -> X ..got reference error