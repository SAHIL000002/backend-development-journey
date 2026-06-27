setDarkorLight = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

setDarkorLight();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    setDarkorLight();
})

document.querySelector("button").addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
    else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
})