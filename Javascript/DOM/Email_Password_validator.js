// Email/Password validator


let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value); //Minimum 8 characters
    // At least 1 uppercase letter
    // At least 1 lowercase letter
    // At least 1 digit
    // At least 1 special character

    if (!emailAns) {
        document.querySelector("#email-error").textContent = "Email is incorrect";
        console.log(emailAns);
    }
    if (!passwordAns) {
        document.querySelector("#password-error").textContent = "Password is incorrect";
        console.log(passwordAns);
    }
    if (emailAns &&passwordAns){
        document.querySelector("#after_submit").textContent = "Form is submitted";
    }

})