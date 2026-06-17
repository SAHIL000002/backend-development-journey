// SELECTING ELEMENTS

// 1. getElementById()

// it select the html element by there id

let abcd = document.getElementById("b");
console.log(abcd);
// Returns a single element.

// 2. getElementsByClassName()

// it select the html element by there class name 

let dvf = document.getElementsByClassName("hii");
console.log(dvf);
// Returns an HTMLCollection (array-like object).

// 3. queryselector()

//  3.1 queryselector 
// it select only the first occurance of the element 

let sdf = document.querySelector("h1");
console.log(sdf); 

// 3.2 queryselectorAll()
// it select all the occurances of the element and return a nodelist
let sdf1 = document.querySelectorAll("h1");

// TEXT/CONTENT ACCESS

// 1. inner text

let h1 = document.querySelector("h1");
h1.innerText = "hello boy";
console.dir(h1);

// 2. textContent

let h2 = document.querySelector("h2");
h2.textContent = "hello girl";
console.dir(h2);

// 3. innerHTML

// we can write html code also 
let h3 = document.querySelector("h3");
h3.innerHTML = "<i>hello child</i>";


// ATTRIBUTE MANIPULATION

// syntax for attribute manipulation

// 1. getAttribute("attribute_name")
// 2. setAttribute("attribute_name" , "value")
// 3. removeAttribute("attribute_name")
// 4. hasAttribute("attribute_name") // returns true or false


// 1 . getAttribute()
let a = document.querySelector("a");
console.log(a.getAttribute("href")); // returns the value of the href means whaat you write in the href

// 2. setAttribute()

let b = document.querySelector("a");
b.setAttribute("href", "https://www.google.com");

// 3. removeAttribute() 
let c = document.querySelector("a");
c.removeAttribute("href");  // it removes the value of my href attribute ie. (https://www.google.com)

let  e  = document.querySelector("a");
a.setAttribute("href", "https://www.facebook.com");   // here i agin set the value of the attribute that's why the below code shows true

// 4. hasAttribute()
let d  = document.querySelector("a");   
console.log(d.hasAttribute("href")); // true