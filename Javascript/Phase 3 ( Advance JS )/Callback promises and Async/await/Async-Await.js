// Async Await is a syntactic sugar over promises. It makes asynchronous code look and behave a little more like synchronous code. This is where the async and await keywords come into play.

// The async keyword is used to declare an asynchronous function, which returns a promise. The await keyword is used to pause the execution of the async function until the promise is resolved or rejected.

let pr = new Promise (function (resolve , reject){
    setTimeout(function(){
        let nm = Math.floor(Math.random()*10);
        if(nm>5){
            resolve("resolved by "+nm);
        } else {
            reject("rejected by "+nm);
        }
    } , 2000);
})

async function abcd(){
    try{
        let val = await pr; // await will wait for the promise to resolve or reject
        console.log(val);
    } catch (err){
        console.log(err);
    }
}

abcd(); 

// another example

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data aa gaya");
        }, 3000);
    });
}

async function demo() {
    console.log("1");

    const data = await getData();

    console.log(data);
    console.log("2");
}

demo();

console.log("3");