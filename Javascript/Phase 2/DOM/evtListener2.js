// mouseover and mousemove

let div = document.querySelector("div");

// div.addEventListener("mouseover" , function(){
//     div.style.backgroundColor = "yellow";
// })
// div.addEventListener("mouseout" , function(){
//     div.style.backgroundColor = "red";
// })

window.addEventListener("mousemove" , function(dets){
    console.log(dets);
    div.style.top = dets.clientY+"px";
    div.style.left = dets.clientX+"px";
})