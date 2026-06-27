//  create an object for a student with name , age and is Enrolled

let student = {
    name: "harsh",
    age: 24,
    isEnrolled: true,
}

// can an object key be a number or boolean?

const obj = {
    1: "one",
    true: "yes"
}
console.log(obj[1]); // output : one
console.log(obj[true]);  // output : yes

// access the value of the first name from the object 

const user = {
    "first-name": "harsh",
    "last-name": "kumar"
}

console.log(user.first - name) // it is not allowed when you create the with ( - ) symbol

console.log(user["first-name"]); // instead of that you can use this method to access that value

// given a dynamic key let key = "age" , how will you access user[key]?

let key = "age";
const user2 = {
    name: "harsh",
    age: 24,
}
console.log(user2[key]);

// from the object below , print the latitude :

const locations = {
    city: "bhopal",
    cordinate: {
        lat: 23.33,
        lng: 77.4,
    }
}
// console.log(locations.cordinates.lat);

// what will  happen if cordinates is missing ? how can you prevent errors?
console.log(locations?.cordinates?.lat); // optional chaining

// destructure the city and lat from the location object above

let [lat, city] = [locations.cordinate.lat, locations.city]

console.log(lat, city);

// destructure the key "first-name" as a variable called firstName.

const user3 = {
    "first-names": "harsh",
}

let { "first-names": firstName } = user3;
console.log(firstName);

// use for in loop to log all keys in this object:

const course = {
    title: "javascript",
    lessons: 50,
    level: "beginner",
    isPublic: true,
    author: {
        firstName: "shaurya",
        lastName: "sinha"
    }
}

for (let key in course) {
    console.log(key);
}

// copy the given object using spread operator

const original = { a: 1, b: 2 };
const copy = {...original};
console.log(copy);