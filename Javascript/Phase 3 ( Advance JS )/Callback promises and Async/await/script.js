// callback function :

// ek function ko agar ek aur function bhej de rahe haai parameter me , to wo parameter wala function callback function kehlata hai.

function KuchDerBaadChalunga(val) {
    setTimeout(() => {
        console.log(val);
    }, Math.floor(Math.random() * 10) * 1000);
}
KuchDerBaadChalunga("Hello");

// here the ekAurFunction recieves a parameter which is a function , this function which is send via parameter is known as callback function.

function ekAurFunction(fnc) {
    setTimeout(fnc, Math.floor(Math.random() * 20) * 1000);
}

ekAurFunction(function () {    // callback function
    console.log("hello ji!");
});

// another example

function addition(a, b, fnc) {
    console.log("wait for addition");
    fnc(a, b);
}

function add(a, b) {
    console.log(a + b);
}


addition(3, 5, add);


// callback hell : 

// Callback Hell tab hota hai jab multiple callbacks ek doosre ke andar nested ho jate hain, jisse code difficult to read aur maintain ho jata hai.

