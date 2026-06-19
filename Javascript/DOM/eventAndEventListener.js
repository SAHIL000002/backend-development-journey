// adding eventListener

// syntax : element.addEventListener("event_name" , function() {} )

let f = document.querySelector("p");

// f.addEventListener("click", function(){
//     f.style.color = "green";
// })

f.addEventListener("mouseover", function(){
    f.style.color = "red";
})

f.addEventListener("mouseout", function(){
    f.style.color = "blue";
})

f.addEventListener("dblclick", function(){
    f.style.color = "yellow";
})

// removing eventListener


// f.addEventListener("click", function(){
//     f.style.color = "green";
// })
// agr code is format me likha h toh eventListener remove nhi hoga 


function click(){
    f.style.color = "green";
}

f.addEventListener("click",click);
f.removeEventListener("click", click);