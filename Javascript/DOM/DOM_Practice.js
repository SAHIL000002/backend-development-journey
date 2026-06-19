// Task 1 : change the heading of a page by ID and change its text to "welcomme to Sherryians!"

let heading = document.querySelector("#heading");
heading.textContent = "welcome to Sheryians!";

// Task 2 : select all <li> elements and print their text using a loop.

let li = document.querySelectorAll("li");
li.forEach(function(val){
    console.log(val.textContent);
})

// Task 3 : select a paragraph and replace its content with : {/* <b>updated</> by Javascript */}

let para = document.querySelector("p");
para.innerHTML = " <b>updated</b> by Javascript ";

// Task 4 :  how do you get the src of an image using js?

let src = document.querySelector("img");
console.log(src.getAttribute("src"));

// Task 5 : select a link and update its herf to point https://sheryians.com

let a = document.querySelector("a");
a.setAttribute("href", "https://sheryians.com");

// Task 6 :  add a tilte atribute to  a div dinamically.

const div = document.querySelector("div");
div.setAttribute("title","hey this is title");

// Task 7: remove the disabled attribute from a button.

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// what does createElement() do ? what's returned?

// create an element and return html node 

let h5 = document.createElement("h5");
console.log(h5);
h5.textContent = "hello dosto";
document.body.append(h5);

// TAsk 8 : create a new list item <li> new task </li> and add it to the end of a <ul>.

// document.querySelector("ol").append(document.createElement("li").textContent = "new task");


let ol = document.querySelector("ol");
let lii = document .createElement("li");
lii.textContent = "new task";
document.querySelector("ol").append(lii);

// Task 9 : create a new image element with a placeholder source and add att the top of a div.

let img = document.createElement("img");
img.setAttribute("placeholder", "source");
document.querySelector("div").prepend(img);

// Task 10 : select the first item in the list and delete it from the DOM.

let olll = document.querySelector("ol");
let first = document.querySelector("li");

olll.removeChild(first);

// Task 11 : add a highlight class to every even item.

let sdc = document.querySelector("ol");
let all = document.querySelectorAll("li:nth-child(2n)");

all.forEach(function(elem){
     elem.classList.add("highlight");
});

// Task 12 : 

let p = document.querySelectorAll("p");
p.forEach(function(val){
    val.style.fontSize = "28px";
})