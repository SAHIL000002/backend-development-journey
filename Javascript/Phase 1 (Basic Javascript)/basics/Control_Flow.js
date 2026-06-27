//  CONTROL FLOW IN JS

// IF 

let age = 18;

if (age >= 18) {
  console.log("Adult"); // it runs when the given condition is true
}


// IF...ELSE

let num = 15;
if (num%10==0){   
    console.log("good");  // it runs when the above condition is true
} else{
    console.log("bad");  // it runs when the condition is false  
}


// IF...ELSE IF...ELSE

let marks = 75;

if (marks >= 90) {
  console.log("A");  // print A if the marks is greater than or equal to 90
} else if (marks >= 70) {
  console.log("B");  // print B if the marks is greater than or equal to 70
} else {
  console.log("C");  // if the both condition is not satisfied than this block is execute
}


// SWITCH CASE

let quarter = 3;
switch(quarter){   // switch ke andr jo variable diya hai uski value ke hisab se case execute hota hai 
    case 1 : console.log("january , february , march");
    break;
    case 2 : console.log("april , may , june");
    break;
    case 3 : console.log("july august , september");
    break;
    case 4 : console.log("october , november , december");
    break;
    default : console.log("not a quarter!"); // it runs when no any condition is satisfied 
}

let x=2;
switch(x){
    case 2 : console.log("two");   // in this case the value of x is 2 so it will print two but it also print three because there is no any break between the cases.
    case 3 : console.log("three"); 
}

// some examples of control flow statements in js

// 1. Find the greatest number among three numbers
let a = 100 ;
let b = 35 ;
let c = 5 ;

if (a>b && a>c){
    console.log("a is greater");
} else if(b>a && b>c){
 console.log("b is greater");
} else {
    console.log("c is greater");
}

// 2. check if two numbers have same last digit or not

let num1 =3424;
let num2 =24;
if (num1%10==num2%10){
    console.log("same last digit of both numbers");
} else {
    console.log("not sale last digits");
}

let a=5;
let b= 6;
console.log(a>3&&b<10)

// 3. check if the string starts with 'a' and has more than 3 characters or not 

let a = "apple";
if (a[0]=='a' && a.length>3){
    console.log("it is a good string");
} else {
    console.log("not a good string");
}

