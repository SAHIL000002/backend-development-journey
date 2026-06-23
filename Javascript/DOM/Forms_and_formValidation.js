// Form and FormValidation

// reading values from input , textarea and select

let form = document.querySelector("form");

let nm = document.querySelector("#name");

form.addEventListener("submit" , function(dets){
    dets.preventDefault(); // prevent from early submission of the form
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }
    else{
        document.querySelector("#hide").style.display = "none";
    }
})

form.addEventListener("submit" , function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // let ans = emailRegex.test("a@a.a"); // true because format is true
    let ans = emailRegex.test(document.querySelector("#email").value);
    console.log(ans);

    const nameRegex = /^[A-Za-z ]+$/;
    console.log(nameRegex.test(document.querySelector("#name".value)))
})

