// this is for creating server

const express = require("express");
const app = express();

app.use(express.json()); // middleware hai jo frontend se aane wale data ko readable formant me karta hai

const notes = [];

// title , description

app.post("/notes", (req, res) => {   // we create a api name : notes
  notes.push(req.body);

  res.status(201).json({
    message: "note created succesfully",
  });
});

app.get("/notes" , (req , res) =>{
    res.status(200).json({
        message : "notes fetched succesfully",
        notes : notes
    })
})

app.delete("/notes/:index" , (req , res)=>{
    const index = req.params.index
    delete notes[index]
        res.status(200).json({
            message:"note deleted succesfully"
        })  
})

app.patch("/notes/:index" ,(req ,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description

    res.status(200).json({
        message :"note updated succesfully"
    })
})

module.exports = app; // server export ho gya ab ese khi bhi import kara sakte h
