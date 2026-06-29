// setTimeout and clearTimeout


//  setTimeout : ye ek baar function ko chalata hai diye gye time ke baad.

// 3000 = 3000 milliseconds = 3 seconds

// syntax : setTimeout(function, delay);

setTimeout(function(){
    console.log("hello"); 
} , 5000)


// clearTimeout 

let tm = setTimeout(function(){
    console.log("mai 3 sec baad aaunga"); // Yaha 5 second complete hone se pehle timeout cancel ho gaya, isliye "Hello" print hi nahi hoga. 
}, 3000);

clearTimeout(tm);   

//  setInterval : Ye function ko baar-baar chalata hai ek fixed interval ke baad.

// syntax : setInterval(function, interval);

 let cm = setInterval(function(){
    console.log("hello i and time inverval");
} , 3000)

// clearInterval : jb bhi interval ko rokna ho to clearInterval laga denge 

clearInterval(cm);


// countdown Timer

let count = 10 ;
let timer = setInterval(() => {
    if (count>=0){
    console.log(count--);
    } else {
        console.log("timeout!");
        clearInterval(timer); 
    }
}, 1000);