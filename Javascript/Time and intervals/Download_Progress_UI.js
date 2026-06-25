// overall progress = 3 seconds
// 100% 
// 3000ms means 30ms me 1% progress

let count = 0;
let sec = 5;
let progress = document.querySelector(".progress-bar");
let interval  = setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width = count + "%";
        document.querySelector("#percent").textContent = count + "%";
    }
    else {
        document.querySelector("h3").textContent = "Downloaded!"
        clearInterval(interval);
    }

}, (sec * 1000) / 100)