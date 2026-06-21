// adding eventListener

// syntax : element.addEventListener("event_name" , function() {} )

let f = document.querySelector("p");

// f.addEventListener("click", function(){
//     f.style.color = "green";
// })

f.addEventListener("mouseover", function () {
    f.style.color = "red";
})

f.addEventListener("mouseout", function () {
    f.style.color = "blue";
})

f.addEventListener("dblclick", function () {
    f.style.color = "yellow";
})

// removing eventListener


// f.addEventListener("click", function(){
//     f.style.color = "green";
// })                                  
// agr code es format me likha h toh eventListener remove nhi hoga 


function click() {
    f.style.color = "green";
}

f.addEventListener("click", click);
f.removeEventListener("click", click);


// COMMON EVENTS 
// input

let inp = document.querySelector("input");
inp.addEventListener("input", function (evt) {
    // console.log("typed");
    // console.log("h");      // both are static means mai kuch bhi likhunga ye console per only h print krega

})

let inp2 = document.querySelector("#inp2");
inp2.addEventListener("input", function (dets) {
    console.log(dets.data);  // note that .data baad me lagana h      
})


let ipn3 = document.getElementById("inp3");
ipn3.addEventListener("input", function (details) {
    if (details.data !== null) {
        console.log(details.data);
    }
})

// change event

// change event tb chalta h jb apkaa koi input select ya textarea mai koi chnge ho jaye


let user = document.getElementById("username");
user.addEventListener("change", function () {
    console.log(user.value);  // print the values of user input one by one when click enter after writting
})

let device = document.getElementById("device");
let select = document.querySelector("select");
select.addEventListener("change", function (details) {
    device.style.textTransform = "uppercase";
    device.textContent = `${details.target.value} device selected`;
    // console.log(details.target.value);
})


// keydown event

h1 = document.querySelector("#h1");
window.addEventListener("keydown", function (dets) {
    if (dets.key === " ") {
        h1.textContent = "Spacebar";
    }
    else {
        h1.textContent = `${dets.key}`;
        console.log(dets);
    }
})

let btn = document.querySelector("#btn");
let original = document.querySelector("#original_btn");
btn.addEventListener("click", function () {
    original.click();
})

original.addEventListener("change", function (details) {
    // console.log(details.target.value);
    // console.log(details?.target?.files[0]?.name);
    //     btn.textContent = `${details.target.files[0].name}`;
    // btn.textContent = details?.target?.files[0]?.name;  // both are valid

    const file = details.target.files[0];
    if (file) {
        btn.textContent = file.name;  // this is also valid
    }
})


// form 

let inputs = document.querySelectorAll(".form");
inputs.forEach((val =>{
    val.setAttribute("required" , true);
}))
let form = document.querySelector("form");
form.addEventListener("submit", function (dets) {
    dets.preventDefault(); // prevent from reloading.

    console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h2 = document.createElement("h2");
    h2.textContent = inputs[1].value;

    let h4 = document.createElement("h4");
    h4.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(p);
    console.log(card);

    form.appendChild(card);
    console.log(form);

    inputs.forEach(function (val) {
        if (val.type !== "submit") {
            val.value = "";  // after submitting form input box will be empty
        }
    })
})



