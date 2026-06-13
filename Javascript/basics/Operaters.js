// OPERATORS

// Arithmatic , Comparison , logical , assignment , unary , ternary

//  1. Arithmatic 

let a = 10;
let b = 2;
console.log(a + b); // addition  ..optput = 12.
console.log(a - b); // subtraction  ..ouput = 8.
console.log(a * b); // multiplication  ..output = 20.
console.log(a / b); // division  ..output = 5.
console.log(a % b); // modulus -> gives the remainder  ..output = 0.
console.log(a**b); // exponentiation  ..output = 100

// 2. Comparison

console.log(a > b); // greater than  ..output = true.
console.log(a < b); // less than  ..output = false.
console.log(a >= b);
console.log(a <= b);
console.log(a == b); // equality operator -> it checks only value not the data type  ..output = false.
console.log(a === b); // strict equality operator -> it checks both value and data type  ..output = false.
console.log(a != b); // not equal operator -> it checks only value, not the data type  ..output = true.
console.log(a !== b); // strict not equal operator -> it checks both value and data type  ..output = true.


// 3. Logical

console.log(true && true); // logical AND  ..output = true.
console.log(true && false); // logical AND  ..output = false.
console.log(true || false); // logical OR  ..output = true.
console.log(false || false); // logical OR  ..output = false.
console.log(!true); // logical NOT  ..output = false.

// 4. Assignment

let c = 10; // assignment operator  ..output = 10.
c += 5; // addition assignment operator  ..output = 15.
c -= 3; // subtraction assignment operator  ..output = 12.
c *= 2; // multiplication assignment operator  ..output = 24.
c /= 4; // division assignment operator  ..output = 6.
c %= 5; // modulus assignment operator  ..output = 1.
c **= 3; // exponentiation assignment operator  ..output = 1.

// 5. Unary

let d = "5";
console.log(typeof(+a)); // unary plus  ..output = 10. +a converts the string "5" into the number 5. 

console.log(typeof(-a)); // unary minus  ..output = -10. -a converts the string "5" into the number -5.

console.log(d++); 

// 6. Ternary

// it is a shorthand for if-else statement, it takes three operands, first is the condition, second is the value if the condition is true, and third is the value if the condition is false.

//  condition ? valueIfTrue : valueIfFalse;

let age = 18;
let result = (age >= 18) ? "You are an adult" : "You are a minor"; 
console.log(result); // output = you are an adult 

let score = 25;

let grade = (score >= 90) ? "A" : score >=75 ? "b" : score >= 60 ? "c" : "fail" ;
console.log(grade); // output = fail