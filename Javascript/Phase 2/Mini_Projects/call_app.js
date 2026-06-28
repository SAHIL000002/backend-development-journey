// new card create krna hai , data local storage me save karna hai 
// local storage se hi cards ko show karana hai 
// button ko handle karna hai 
// filters ko handle karna hai

const tasks = [];

let addNote = document.querySelector("#addBtn");
let formContainer = document.querySelector("#popup");
let closeform = document.querySelector(".close-btn");

const form = document.querySelector("#callForm");

const imageUrl = document.querySelector("#imageUrl");
const fullName = document.querySelector("#fullName");
const homeTown = document.querySelector("#homeTown");
const purpose = document.querySelector("#purpose");

const category = document.querySelector(
    'input[name="category"]:checked'
);

const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close-btn");

// CODE STARTS HERE

function saveToLocalStorage(obj){
    if (localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks" , JSON.stringify(oldTasks));    
    }
    else {
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

addNote.addEventListener("click" , function(){
    formContainer.style.display = "flex";
})

closeform.addEventListener("click" , function(){
    formContainer.style.display = "none";
})

form.addEventListener("submit" , function(evt){
    evt.preventDefault();
    const image = imageUrl.value.trim();
const name = fullName.value.trim();
const town = homeTown.value.trim();
const callPurpose = purpose.value.trim();

const selectedCategory = document.querySelector(
    'input[name="category"]:checked'
);

if (image === "") {
    alert("Please enter Image URL.");
}
else if (name === "") {
    alert("Please enter Full Name.");
}
else if (town === "") {
    alert("Please enter Home Town.");
}
else if (callPurpose === "") {
    alert("Please enter Purpose.");
}
else if (!selectedCategory) {
    alert("Please select a Category.");
}
else {

    saveToLocalStorage({
        image,
        name,
        town,
        callPurpose,
        selectedCategory: selectedCategory.value
    })

    form.reset();
    formContainer.style.display = "none";
}
})

function showCards(){
    let allTasks = JSON.parse(localStorage.getItem("tasks"));

    allTasks.forEach(function(task) {
        const card = document.createElement("div");
card.classList.add("card", "active");

// Image
const img = document.createElement("img");
img.src = "https://i.pravatar.cc/100?img=12";

// Name
const heading = document.createElement("h2");
heading.textContent = "Fatima Uma";

// Details Container
const details = document.createElement("div");
details.classList.add("details");

// Home Town
const homeDiv = document.createElement("div");

const homeSpan = document.createElement("span");
homeSpan.textContent = "Home Town";

const homePara = document.createElement("p");
homePara.textContent = "Singapore";

homeDiv.append(homeSpan, homePara);

// Bookings
const bookingDiv = document.createElement("div");

const bookingSpan = document.createElement("span");
bookingSpan.textContent = "Bookings";

const bookingPara = document.createElement("p");
bookingPara.textContent = "3 Times";

bookingDiv.append(bookingSpan, bookingPara);

// Add Details
details.append(homeDiv, bookingDiv);

// Button Container
const btns = document.createElement("div");
btns.classList.add("btns");

// Call Button
const callBtn = document.createElement("button");
callBtn.classList.add("call");

const icon = document.createElement("i");
icon.classList.add("fa-solid", "fa-phone");

callBtn.append(icon, " Call");

// Message Button
const messageBtn = document.createElement("button");
messageBtn.classList.add("message");
messageBtn.textContent = "Message";

// Add Buttons
btns.append(callBtn, messageBtn);

// Add Everything
card.append(img, heading, details, btns);

// Finally append to cards container
document.querySelector(".cards").appendChild(card);
    });

}

showCards();