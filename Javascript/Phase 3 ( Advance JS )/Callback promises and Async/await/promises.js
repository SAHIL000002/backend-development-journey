// promises

// hum ek promise banate hai jo ki do state me jaa sakta hai and wo ya to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt batayega par hume dono ke liye code likhna hoga

let pr = new Promise(function(res , rej ){
    let age = 12;
    if (age > 18){
        res("you are eligible for vote ");
    } else {
        rej("you are not eligible for vote");
    }
})
pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})

// another example 

let pr2 = new Promise(function(resolve , reject){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn>5){
            resolve("resolve by "+rn);
        } else {
            reject("reject by "+rn);
        }
    }, 3000);
})

pr2.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})