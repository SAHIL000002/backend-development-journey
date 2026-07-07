const express = require('express'); // require load the package express 

const app =  express() // her we create a instance of a server and store in app variable

app.get("/",(req , res)=>{  // req is used for access the data comming from frontend 
    res.send("Hello World")   // res is used for send data to backend 
})

app.get("/contact" , (req ,res)=>{
    res.send("contact me at 9:00 AM")
})

app.listen(3000) // listen server ko start krne ke liye -> server ka instance to uper hi bn gya h but start nhi hua tha .