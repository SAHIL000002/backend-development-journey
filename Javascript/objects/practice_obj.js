//  create an object for a student with name , age and is Enrolled

let student = {
    name : "harsh",
    age : 24,
    isEnrolled : true,
}

// can an object key be a number or boolean?

const obj = {
    1 : "one",
    true : "yes"
}
console.log(obj[1]); // output : one
console.log(obj[true]);  // output : yes

// access the value of the first name from the object 

const user = {
    "first-name" : "harsh",
    "last-name" : "kumar"
}

console.log(user.first-name) // it is not allowed when you create the with ( - ) symbol

console.log(user["first-name"]); // instead of that you can use this method to access that value

// given a dynamic key let key = "age" , how will you access user[key]?

let key = "age";
const user2 = {
    name : "harsh",
    age : 24,
}
console.log(user2[key]);
