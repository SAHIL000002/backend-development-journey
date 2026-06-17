// basic of OBJECTS

let obj = {
    name: "harsh",
    age: 23,
};

// it is key value structured

console.log(obj);
console.log(obj.name);

// let c = obj.age;   // 
let c = obj["age"];  //rhis is also valid
console.log(c);

// nesting and deep access

let user = {
    name: "harsh",
    address: {
        city: "gorakhpur",
        pin: 2732001,
        location: {
            lat: 23.4,
            lng: 44.5,
        }
    }
};

console.log(user.address.location.lng);  // 44.5

// object destructuring

// if you don't want to write user.address.location.lng bar bar for accessing the value of the lat and lng than ....

let { lat, lng } = user.address.location;
// now the lat and lng are two saperate variables
console.log(lat);  // 23.4 
console.log(lng);  // 44.5

// LOOPING

// syntax
// for(let key in object_name){
//     // write your logic
// }
// example

let data = {
    name: "harsh",
    age: 24,
    email: "test@tst.com",
}

for (let chacha in data) { // chacha is a variable all the keys are store in it
    console.log(chacha)
}

// it you want to print all the values through the loop than use [] brackets 

for (let keys in data) {
    console.log(data[keys]);
}

// and if you to print all values with keys than

for (let key in data) {
    console.log(key, data[key]);
}

//  object.keys()

// syntax :  Object.keys(object_name)

let obj1 = {
    name: "sahil",
    age: 23,
    address: "gorakhpur",
    email: "test@test.com",
}

let keys1 = Object.keys(obj1); // return all the keys in the object in an array
console.log(keys1);

// spread in objects

let obj2 = { ...obj1 };  // it copies all the values from the first and put all values in the second object 
console.log(obj2);  // output : {name: 'sahil', age: 23, address: 'gorakhpur', email: 'test@test.com'}

// object.assign()

let obj3 = Object.assign({}, obj1);
console.log(obj3);  // 
console.log(obj1 === obj3); // false


// inportant : if an object is nested than do not use spread opetator to copy the values because the if we change the value of the nested object that it change the original object value 

let obj4 = {
    name: "sahil",
    age: 23,
    address: {
        city: "gorakhpur",
        pin: 2732001,
    }
}

let obj5 = { ...obj4 };
obj5.address.city = "delhi";
console.log(obj4);  // output : {name: 'sahil', age: 23, address: {city: 'delhi', pin: 2732001}}
console.log(obj5); // output : {name: 'sahil', age: 23, address: {city: 'delhi', pin: 2732001}}

// you can see that the original object value is changed in both obj4 and obj5 have same city 

// to avoid this we use the JSON.parse() and JSON.stringfy()

let obj6 = JSON.parse(JSON.stringify(obj4));
obj6.address.city = "lucknow";  // now this line of code does not change the value of obj4
console.log(obj4);

// optional  chaining


let obj12 = {
    name: "harsh",
    addressess: {
        city: "gorakhpur"
    }
}
console.log(obj12?.address?.city); // it not give us error because of the optional chaining

// computeed properties

let role = "admin";

let obj13 = {
    name: "harsh",
    addressess: {
        city: "gorakhpur"
    },
    [role]: "harsh",  // it will create a new key admin and assign harsh as a value to it
}
console.log(obj13.admin);  // harsh 