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
    colsole.log(val); 
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