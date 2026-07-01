// this keyword

// ye ek special keyword hai ,kyuki jaise ki baki sare keywords ki value ya unka nature same rahta hai , this ki value ya nature badal jat hai , is baat se ki aap usey kaha use kar rahe ho.

// global scope

console.log(this);
// global scope me iski value window hoti hai.

// function ke andar

function abcd() {
    console.log(this);
}

abcd();
// function ke andar bhi this ki value window hoti hai.


// method me  [ek esa function jo object ke andar ho usey method kehte hai.]

let obj = {
    name: "sahil",
    age: 20,
    sayName: function () {
        console.log(this.age);
    }
}

obj.sayName();  // yaha sayname() ko obj ne call kiya esliye this ne obj object ko refer kiya.

// note : this hamesha us object ko refer karta hai jisne function ko call kiya hai.


// event handler 

document.querySelector("h1").addEventListener("click", function () {
    console.log(this.style.color = "red"); // yaha this us elememt ko refer krega jis per eventListener laga hai.
})

// class 

class Abcd {
    constructor() {
        console.log("hey");
        this.a = 12;
    }
}

new Abcd();

// This ki value

// --------------------

// global - window
// function - window
// method with ES5 fnc - object
// method with ES6 arrow fnc - window
// ES5 fnc inside ES method - window
// ES6 arrow fnc inside ES5 method - object 
// eventHAndler - element



// call apply bind 

// 1.call

// function ko call karte waqt aap set kar sate ho uski value kya hogi

let obj2 = {
    name: "sahil",
};

function abcd(a, b, c) {
    console.log(this, a, b, c);
}

abcd.call(obj2, 1, 2, 3); // print whole obj and 1 2 3

//  always function per call lagega objectt per nhi

// 2.apply

// apply sirf do hi parameters accept karta hai
// do se jada arguments array ke form me hona chahiye  

abcd.apply(obj2, [1, 2, 3]); 

// 3.bind 

// ye ak nyi copy bana deta hai fnc ka 

abcd.bind(obj ,1,2,3); // ye kuch bhi print nhi karega

let copyFunc = abcd.bind(obj2, 1, 2, 3);
copyFunc(); // ab abcd fnc chala
console.log(copyFunc); // ye complete abcd fnc hi print kr dega