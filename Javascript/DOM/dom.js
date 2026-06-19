// SELECTING ELEMENTS

// 1. getElementById()

// it select the html element by there id

let abcd = document.getElementById("para");
console.dir(abcd);
// Returns a single element.

// 2. getElementsByClassName()

// it select the html element by there class name 

let dvf = document.getElementsByClassName("hii");
console.log(dvf);
// Returns an HTMLCollection (array-like object).

// 3. queryselector()

//  3.1 queryselector 
// it select only the first occurance of the element 

// by id 

let saf =document.querySelector("#para");
console.log(saf);

// by class 
let sdf = document.querySelector(".hii");
console.log(sdf);

// by tagname

let gr = document.querySelector("h1");
console.log(gr);

// 3.2 queryselectorAll()
// it select all the occurances of the element and return a nodelist
let sdf1 = document.querySelectorAll(".hii");

// TEXT/CONTENT ACCESS

// Text/Content Access means reading or changing the content of an HTML element

// 1. inner text

let h11 = document.querySelector(".hii");
h11.innerText = "hello boy";
console.dir(h11.innerText);

// 2. textContent

let h2 = document.querySelector("h2");
h2.textContent = "hello girl";
console.dir(h2.textContent);

// 3. innerHTML

// we can write html code also 
let h3 = document.querySelector("h3");
h3.innerHTML = "<i>hello child</i>";
console.log(h3.innerText);


// ATTRIBUTE MANIPULATION

// attribute : href , src , alt , type , placeholder etc.

// syntax for attribute manipulation

// 1. getAttribute("attribute_name")
// 2. setAttribute("attribute_name" , "value")
// 3. removeAttribute("attribute_name")
// 4. hasAttribute("attribute_name") // returns true or false


// 1 . getAttribute()
let a = document.querySelector("p");
console.log(a.getAttribute("id")); // returns the value of the href means whaat you write in the href

// 2. setAttribute()
// syntax : element.setAttribute("name", "value");

let b = document.querySelector("a"); 
b.setAttribute("href", "https://www.google.com");

// 3. removeAttribute() 
let c = document.querySelector("a");
c.removeAttribute("href");  // it removes the value of my href attribute ie. (https://www.google.com)
console.log(c.hasAttribute("href"));  // return true if href has any value if not than return false

let  e  = document.querySelector("a");
e.setAttribute("href", "https://www.facebook.com");   // here i again set the value of the attribute that's why the below code shows true

// 4. hasAttribute()
let d  = document.querySelector("a");   
console.log(d.hasAttribute("href")); // true

// some practice 

let img = document.querySelector("img");
img.setAttribute("src" ,"https://images.unsplash.com/photo-1777608598673-4a1607636fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D");

img.removeAttribute("src");
console.log(img.hasAttribute("src")); // false

img.setAttribute("src" , "https://images.unsplash.com/photo-1777646378295-c121ecfea209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D");   // it set the new image and remove the upper one

// DYNAMIC DOM MANUPULATION

//   create element 
// it creates a new HTML element in memery . it does not appear on the webpage untill it is added to the the DOM.

// append/prepend karo jaha bhi element chahiye waha

const p = document.createElement("p");
p.innerText = "this is new paragraph";
console.log(p); // the element is created but it is not visible on display yet beacuse it has not been added to the page

// to add this element to the webpage we have to use appendChild() method

// appendChild()  
// adds the new element as the last child of a parent element. its append only one Node (element) at a time and also can't add text directly

//p.appendChild("hello"); // show error 

document.body.appendChild(p);   // now its visible to the display

// append and prepend

// append adds the element at the end 

const hi = document.createElement("h2");
hi.innerText = "i am apended";
document.body.append(hi); // it shows at the end of the web page

// prepend adds the element at the beginning

const her = document.createElement("h3");
her.innerText = "i am prepended";
document.body.prepend(her);   // it show the top of the web page 

let h1 = document.createElement("h1");
h1.textContent = "hey mai bahar se aaya hu";
document.querySelector("div").appendChild(h1); // this is the way where you want to add the element you add it 



// style updates via .style and classList (add , remove , toggle)

let p1 = document.querySelector("p");
p1.style.color = "green"; // single element per changes karega

const get = document.querySelectorAll("h1");
// get.style.color = "red";  // get error kyuki get ek nodelist hai kyuki selectAll use kiya gya h 
// to make changes in multiple elements we have to use loop 

get.forEach(function(val){   // nodelist per changes ke liye loop lagana padega 
    val.style.color = "red";
    val.style.fontFamily = "gilroy";
    val.style.fontSize = "40px";
    val.style.textTransform = "capitalize";
})


// classList()
// it allow us to add, remove, toggle instead of manuaally changing the entire class attribute.

let change = document.querySelector("div");
change.setAttribute("class" , "huihui");  // change the class name of the div

// add class
let pp = document.querySelector("p");
pp.classList.add("huihui");

// remove class

let section = document.querySelector("section");
section.classList.remove("section");  // removes the class name

// toggle class
// toggle means it reverse the changes means is proprty lgi hai to hata do agr nhi lagi to laga do.

pp.classList.toggle("huihui");



let new1 = document.createElement("h4");
new1.innerText = "i am new at the last";
document.body.append(new1);
new1.style.color = "green";
new1.style.textTransform = "uppercase";

// new1.setAttribute("id", "newid");
// console.log(new1.getAttribute("id"));


new1.classList.add("hellooooo"); // add class to h4 element

