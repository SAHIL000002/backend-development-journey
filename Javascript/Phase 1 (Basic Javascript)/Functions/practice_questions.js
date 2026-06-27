// 1. what is the ootput?

greet();

function greet() {
    console.log("hello!");
} // output : hello!

// 2. convert the givenfunction into an arrow function

function multiply(a, b) {
    return a * b;
}
// conversion

let multiply = (a, b) => {
    return a * b;
};

// 3. identify parameters and argumnts

function welcome(name) {
    console.log(name);
}
welcome("harsh");

// parameter : name and argumnt : harsh

// 4. how many parameters an arguments

function demo(a, b, c) { }
demo(1, 2);

// number of parameters = 3 and arguments = 2   c= undefined

// 5. predict the output

function sayhi(name = "guest"){
    console.log("hi",name);
}

sayhi();  // output : hi guest

// 6. what does the ... operator mean in parameter?

function abcd(...val){

}
abcd(1,2,3,4,5);  // means all the argument store in val variable into a single array


//  7. use rest parameter to accept any number of scores and return the result.

function getScore(...score){
    let total = 0;
    score.forEach(function(val){
        total = total +val;
    })
    return total;
}

console.log(getScore(4,6,6,5,3,8));

// 8. can you assign a function to  variable and than call it ? Show how.

let name = function(){
    console.log("the name is sahil");
}
name();

// 9. what is higher order function

// ek esa function jo return kre ek aur function ya fir accept kre parameter me ek aur function

function abcd(val){
    val();
}
abcd(function(){  // abcd is a higher order function because it contains another function in the parameter

})

// 10. convert the below function into a pure function

let score = 100;
function updateScore(){

    score = score + 10;

}

// converted into pure function

let score = 100;
function updateScore(score){

    newScore = score +10;  // it does not change the value of score

}


// 11. what is IIFE?

// immediately invoked function expression

(function greet(){
    console.log("hello");
})();

// 12. what is the output of the following code

greet();

var greet = function () {  // refrence error because it is function expression and it is not hoist
    console.log("hii!");
};

// 13. what will be the output here and why?

greet();
function greet() {
    console.log("hi!");
}

// 14. write the code for BMI calculator

function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(65, 1.8).toFixed(2));

// 15 closure practice

function counter(){
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let c= counter();
console.log(counter());
console.log(counter());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter ();
console.log(d());
console.log(d());
console.log(d());
console.log(d());