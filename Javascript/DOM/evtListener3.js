// Event bubbling and Event capturing

// Event bubbling 

// it is a mechanism in js where an element start from the target element and propogate upward through its parent element.

// When an event occurs on a child element, the same event automatically travels up to its parent elements. This process is called Event Bubbling.

// note : event bubbling ya event capturing tabhi perform hoga jab elements hierarchy me honge.


let room = document.querySelector("#room");
room.addEventListener("click" , () => {
    console.log("room");
})

let shirt = document.querySelector("#shirt");
shirt.addEventListener("click" , () => {
    console.log("shirt");
})

let pocket = document.querySelector("#pocket");
pocket.addEventListener("click" , () => {
    console.log("pocket");
})


// Delegated event handler on todo list

let ul = document.querySelector("ul");
ul.addEventListener("click" , function(dets){
    // ul.style.textDecorationLine = "line-through";  X
    // console.dir(dets);
    // dets.target.style.textDecorationLine = "line-through";

    dets.target.classList.toggle("lt"); // add clss lt and apply properties if added than remove
    console.log(dets.target);
})


// Jab bhi hmm click krte hai ya event raise krte hai to event do phases me flow hota hai : 

// 1. Event Capturing Phase :  event top level element se neeche aata h.
// 2. Target Phase
// 3. Event Bubbling Phase : event raised element se parent ki taaraf jata hai.

// and pahle event capturing hoti hai then event bubbling

// but by default phase 1 OFF rahti hai , agr hmm usee ON krde to phle phase 1 ka answer milega it means evnt capturing hoga






// event capturing

// In Event Capturing, the event moves from parent to child (top → down).

// capture phase ON krne ke liye last me true likha jata h.


let college = document.querySelector("#college");
let library = document.querySelector("#library");
let book = document.querySelector("#book");
let science = document.querySelector("#science");

college.addEventListener("click" , () => {
    console.log("college");
}  , true )  // this "true" turn ON the capturing phase

library.addEventListener("click" , () => {
    console.log("library");
}  , true )  // this "true" turn ON the capturing phase

book.addEventListener("click" , () => {
    console.log("book");
}  , true )  // this "true" turn ON the capturing phase

science.addEventListener("click" , () => {
    console.log("science");
}  , true )  // this "true" turn ON the capturing phase




// Live charecter counter 

let span = document.querySelector("span");
span.style.color = "green";

let input = document.querySelector("input");
input.addEventListener("input" , () =>{
    // console.dir(input.value.length);
    // span.textContent = `${input.value.length}`;  
    // span.textContent = input.value.length;
    // span.textContent = 20 - input.value.length;

    let left_chars = 20 - input.value.length;
    span.textContent = left_chars;
    if(left_chars <= 0){
        span.style.color = "red";
    }
        else {
            span.style.color = "green";

        }

    })                        


    